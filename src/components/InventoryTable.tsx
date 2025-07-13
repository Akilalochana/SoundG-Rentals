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

const plants = [
    {
        id: "1",
        name: "Aloe Vera",
        category: "Succulent",
        price: "$10.00",
        stock: 50,
        totalAmount: "$500.00",
    },
    {
        id: "2",
        name: "Snake Plant",
        category: "Indoor",
        price: "$15.00",
        stock: 30,
        totalAmount: "$450.00",
    },
    {
        id: "3",
        name: "Spider Plant",
        category: "Indoor",
        price: "$12.00",
        stock: 20,
        totalAmount: "$240.00",
    },
    {
        id: "4",
        name: "Fiddle Leaf Fig",
        category: "Indoor",
        price: "$25.00",
        stock: 15,
        totalAmount: "$375.00",
    },
  
];

export default function InventoryTable() {
  const [selectedPlant, setSelectedPlant] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  return (

    <div className="w-full ">

        <div className="flex items-center gap-2 py-4">
            <div className="relative max-w-sm w-full">
                <Input
                placeholder="Search..." 
                className="pl-10"
                 />
                 <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />

            </div>
            <Combobox value={selectedCategory} onChange={(val: string)=> setSelectedCategory(val)} />
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
        {plants.map((plant) => (
          <TableRow key={plant.id}>
            <TableCell>{plant.name}</TableCell>
            <TableCell>{plant.category}</TableCell>
            <TableCell>{plant.price}</TableCell>
            <TableCell className="font-bold">{plant.stock}</TableCell>

            <TableCell className="text-right">
                <div className="flex justify-end space-x-4">
                  <h1>Edit Button</h1>
                  <h1>Delete Button</h1>
                </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>

    </div>
    
  );
}
