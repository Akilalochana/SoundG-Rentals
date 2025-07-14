"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const plantCategories = [
  { value: "Microphones", label: "Microphones" },
  { value: "Speakers", label: "Speakers" },
  { value: "Mixers", label: "Mixers" },
  { value: "DJ Equipment", label: "DJ Equipment" },
  { value: "Studio Gear", label: "Studio Gear" },
  { value: "Lighting", label: "Lighting" },
  { value: "Cables & Accessories", label: "Cables & Accessories" },
];

interface ComboboxProps {
  value: string;
  onChange: (value: string) => void;
}

export function Combobox({ value, onChange }: ComboboxProps) {
  const [open, setOpen] = React.useState(false)

  const selectedCategory = plantCategories.find((cat) => cat.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          <div className="flex items-center gap-2">
            <span>
              {selectedCategory?.label || "Select category..."}
            </span>
          </div>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." className="h-9" />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {plantCategories.map((cat) => (
                <CommandItem
                  key={cat.value}
                  value={cat.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                  className="flex items-center gap-2"
                >
                  <span>{cat.label}</span>
                  <Check
                    className={cn(
                      "ml-auto",
                      value === cat.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
