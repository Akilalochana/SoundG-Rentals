"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { Combobox } from "@/components/ui/combo-box";
import { getPlants } from "@/actions/plant.action";
import { useRouter } from "next/navigation";
import AlertDialogDemo from "./ui/CreateDialog";



type PlantData = Awaited<ReturnType<typeof getPlants>>;

interface InventoryTableProps {
  plants: PlantData;
}

export default function InventoryTable({ plants }: InventoryTableProps) {
  const router = useRouter(); 

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('');

  // Filter plants based on search term and selected category
  const filteredPlants = plants?.userPlants?.filter((plant: any) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "" || plant.category === selectedCategory)
  );
  return (

    <div className="w-full ">

        <div className="flex items-center gap-2 py-4">
            <div className="relative max-w-sm w-full">
                <Input
                placeholder="Search..." 
                className="pl-10"
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                 />
                 <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />

            </div>
            <Combobox value={selectedCategory} onChange={(val: string)=> setSelectedCategory(val)} />

            <AlertDialogDemo/>
        </div>

        

        <Table >
      
      <TableHeader>
        <TableRow>
          <TableHead>Plant ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredPlants?.map((plant: any) => {
          const slugifiedName = plant.name.toLowerCase().replace(/\s+/g, '-');
          const slug = `${plant.id}--${slugifiedName}`;
          const plantUrl = `/plants/${slug}`;

          return(

          <TableRow key={plant.id} onClick={()=> router.push(plantUrl)}>
            <TableCell>{plant.id}</TableCell>
            <TableCell>{plant.name}</TableCell>
            <TableCell>{plant.category}</TableCell>
            <TableCell>${plant.price}</TableCell>
            <TableCell className="font-bold">{plant.stock}</TableCell>

            <TableCell className="text-right">
                <div className="flex justify-end space-x-4">
                  <h1>Edit Button</h1>
                  <h1>Delete Button</h1>
                </div>
            </TableCell>
          </TableRow>
        )})}
      </TableBody>
      
    </Table>

    </div>
    
  );
}
