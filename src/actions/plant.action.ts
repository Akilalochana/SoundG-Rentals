"use server";
import { prisma } from "@/lib/prisma";
import { getUserId } from "./user.action";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";

export async function  getPlants(searchTerm?: string) {
    try{
        const currentUserId = await getUserId();

        const whereClause: any = {
            userId: currentUserId,
        }

        if(searchTerm){
            whereClause.name = {
                contains: searchTerm,
                mode: 'insensitive',
            }
        }
        const userPlants = await prisma.plants.findMany({
            where: whereClause,
            
        });
        revalidatePath('/');
        return {success:true, userPlants}
        
    }
    catch (error) {
        console.error("Error fetching equipment:", error);
        throw new Error("Failed to fetch equipment");
    }
}

// Note: We're keeping the function name as getPlants to avoid breaking existing code,
// but this now returns audio equipment data instead of plants


export async function getPlantById(id: string) {
   return await prisma.plants.findUnique({
        where: { id },
    });
}


// Define our own interface for equipment creation from the client side
interface PlantsCreateInput {
    name: string;
    description?: string;
    category: string;
    stock: number;  // Represents available units for audio equipment
    price: number;  // Represents daily rental rate for audio equipment
    imageUrl?: string;
}

export async function createPlant(data: PlantsCreateInput) {
    console.log("Creating equipment");
    console.log(data);
    try {
        const currentUserId = await getUserId();
        if(!currentUserId) return;
        
        const newEquipment = await prisma.plants.create({
            data: {
                ...data,
                userId: currentUserId,
            }
        });
        
        revalidatePath("/plants");
        return newEquipment;
    } catch (error) {
        console.error("Error Creating Equipment:", error);
        throw error;
    }
}


export async function editPlant(
    id: string,
    data: Prisma.PlantsUpdateInput
) {
    try {
        const currentUserId = await getUserId();
        if (!currentUserId) return;

        const updatedEquipment = await prisma.plants.update({
            where: { id },
            data: {
                ...data,
                userId: currentUserId,
            }
        });

        revalidatePath(`/plants/${id}`);
        revalidatePath(`/plants`);
        return updatedEquipment;
    } catch (error) {
        console.error("Error updating equipment:", error);
        throw error;
    }
}

export async function deletePlant(id: string) {
    try {
        const currentUserId = await getUserId();
        if (!currentUserId) return;

        // Check if the equipment belongs to the current user
        const equipment = await prisma.plants.findFirst({
            where: { 
                id,
                userId: currentUserId 
            }
        });

        if (!equipment) {
            throw new Error("Equipment not found or you don't have permission to delete it");
        }

        // Delete the equipment
        const deletedEquipment = await prisma.plants.delete({
            where: { id }
        });

        revalidatePath(`/plants`);
        return deletedEquipment;
    } catch (error) {
        console.error("Error deleting equipment:", error);
        throw error;
    }
}
