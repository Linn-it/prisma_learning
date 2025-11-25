"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { DialogBox } from "./DialogBox";
import { EditDialogBox } from "./EditDialogBox";
import { DeleteDialog } from "./DeleteDialog";

export function InventoryTable({ plants }: any) {
  const [search, setSearch] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const filterPlants = plants.filter(
    (plant: any) =>
      plant.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedValue == "" || selectedValue == plant.category)
  );

  const selectedValueChange = (value: string) => {
    setSelectedValue(value === "none" ? "" : value);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="relative flex gap-4">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 w-sm"
            type="type"
            placeholder="Filter plants..."
          />
          <Search size={18} className="absolute left-2 top-2"/>
          <Select onValueChange={(value) => selectedValueChange(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="Indoor">Indoor</SelectItem>
                <SelectItem value="Outdoor">Outdoor</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <DialogBox/>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>PlantID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterPlants?.map((plant) => (
            <TableRow key={plant.id}>
              <TableCell className="font-medium text-primary hover:underline">
                <Link href={`plants/${plant.id}`}>{plant.id}</Link>
              </TableCell>
              <TableCell>{plant.name}</TableCell>
              <TableCell>{plant.category}</TableCell>
              <TableCell>{plant.price}</TableCell>
              <TableCell>{plant.stock}</TableCell>
              <TableCell className="text-center">
                <EditDialogBox plant={plant}/> 
                <DeleteDialog plantId={plant.id}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
