import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Combobox } from "./combo-box";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./textarea";
import { Input } from "./input";
import { useState } from "react";
import { createPlant, editPlant, deletePlant } from "@/actions/plant.action";
import { Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { getPlantById } from "@/actions/plant.action";

// Define a single Plant interface instead of having both type and interface
interface Plant {
  id: string;
  name: string;
  description: string | null;
  category: string;
  stock: number;
  price: number;
  userId: string;
  imageUrl?: string | null;
}

interface PlantCardProps {
  plant: Plant;
}

export default function EditDialog({ plant }: PlantCardProps) {
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: plant?.name || "",
        category: plant?.category || "",
        description: plant?.description || "",
        stock: plant?.stock || 0,
        price: plant?.price || 0,
        imageUrl: plant?.imageUrl || "",
    });

    const handleChange = (field: string, value: string|number) => {
        // Convert stock and price to numbers if they're those fields
        if (field === "stock" || field === "price") {
            const numValue = typeof value === "string" ? parseFloat(value) : value;
            setFormData({ ...formData, [field]: numValue });
        } else {
            setFormData({ ...formData, [field]: value });
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Prepare the data with proper types
            const formDataToSubmit = {
                name: formData.name,
                category: formData.category,
                description: formData.description,
                stock: Number(formData.stock), // Ensure it's a number
                price: Number(formData.price), // Ensure it's a number
                imageUrl: formData.imageUrl || undefined // Use undefined if empty string
            };
            
            console.log("Form Data Submitted:", formDataToSubmit);
            
            // Update the plant
            const updatedPlant = await editPlant(plant.id, formDataToSubmit);
            
            if (updatedPlant) {
                console.log("Equipment updated successfully!", updatedPlant);
                toast.success(`${updatedPlant.name} has been updated successfully!`);
                // You might want to close the dialog here
            }
        } catch(e) {
            console.error("Error updating equipment:", e);
            toast.error("Failed to update equipment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this equipment? This action cannot be undone.")) {
            return;
        }
        
        setIsSubmitting(true);
        try {
            await deletePlant(plant.id);
            toast.success(`${plant.name} has been deleted successfully!`);
            // You might want to navigate away or close the dialog here
        } catch (e) {
            console.error("Error deleting equipment:", e);
            toast.error("Failed to delete equipment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Pencil className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Equipment</AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            Make changes to your equipment information below.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Equipment Name
                    </Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Enter equipment name"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <Label htmlFor="category" className="block text-sm font-medium text-gray-700 mt-4">
                        Category
                    </Label>
                    <Combobox value={formData.category}
                     onChange={(val) => handleChange("category", val)} 
                     />
                    
                </div>

            </div>
            <Label htmlFor="description">Description</Label>
            <Textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Enter equipment description"
                
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <Label htmlFor="stock">
                        Available Units
                    </Label> 
                    <Input
                        type="number"
                        id="stock"
                        name="stock"
                        required
                        value={formData.stock}
                        onChange={(e) => handleChange("stock", Number(e.target.value))}
                        
                        
                    />   
                </div>
                <div>
                    <Label htmlFor="price">
                        Daily Rental Rate
                    </Label>
                    <Input
                        type="number"
                        id="price"
                        name="price"
                        required
                        value={formData.price}
                        onChange={(e) => handleChange("price", Number(e.target.value))}
                        
                    />
            </div>
        </div>

        <h1>Upload Equipment Images</h1>
       

        <AlertDialogFooter className="flex justify-between">
          <Button 
            variant="destructive" 
            type="button"
            onClick={handleDelete}
            disabled={isSubmitting}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
          
          <div className="flex gap-2">
            <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Changes"}
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>

        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
