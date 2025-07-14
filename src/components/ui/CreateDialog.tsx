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
import { createPlant } from "@/actions/plant.action";
import {toast} from "react-hot-toast";

export default function CreateDialog() {
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        stock: 0, // Initialize as number
        price: 0, // Initialize as number
        imageUrl: "",
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
            // Create the submission data with proper types
            const formDataToSubmit = {
                name: formData.name,
                category: formData.category,
                description: formData.description,
                stock: Number(formData.stock), // Ensure it's a number
                price: Number(formData.price), // Ensure it's a number
                imageUrl: formData.imageUrl || undefined // Use undefined if empty string
            };
            
            console.log("Form Data Submitted:", formDataToSubmit);
            

            const newPlant = await createPlant(formDataToSubmit);
            // Reset form or show success message
            if (newPlant) {
                console.log("Plant created successfully!", newPlant);
                // Reset form after successful creation
                setFormData({
                    name: "",
                    category: "",
                    description: "",
                    stock: 0,
                    price: 0,
                    imageUrl: "",
                });
                // Show success toast
                toast.success(`${newPlant.name} has been added successfully!`);
            }
        } catch(e) {
            console.error("Error submitting form:", e);
            // toast({
            //     title: "Error",
            //     description: "Failed to create plant. Please try again.",
            //     variant: "destructive",
            // });
            toast.error("Failed to create plant. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add New Plant</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>add plants</AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            Are you sure you want to add a new plant? This action cannot be
            undone. Please confirm to proceed with adding the plant.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Plant Name
                    </Label>
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Enter plant name"
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
                placeholder="Enter plant description"
                
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <Label htmlFor="stock">
                        Stock
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
                        Price
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

        <h1>upload images</h1>
       

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
          <AlertDialogAction type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </AlertDialogAction>
        </AlertDialogFooter>

        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
