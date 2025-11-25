import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { createPlant } from "@/actions/plant.action";
import toast from "react-hot-toast";

export function DialogBox() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stock: 1,
    price: "",
    category: "",
    imageUrl: "",
  });

  const handleChange = (field: string, value: string | number) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createPlant(formData);
      setOpen(false);
      toast.success('Plant Created Successfully!', {
        position: 'top-right'
      });
    } catch (error) {
      console.log("error creating plants", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className="cursor-pointer">
          Add Plant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add a Plant</DialogTitle>
            <DialogDescription>
              Fill out the form below to add a new plant to your inventory.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 py-3">
            <div className="grid gap-3">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="category">Caetory</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleChange("category", value)}
              >
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
          </div>
          <div className="grid gap-3 py-3">
            <Label htmlFor="desc">Description</Label>
            <Textarea
              id="desc"
              placeholder="Type your message here."
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 py-3">
            <div className="grid gap-3">
              <Label htmlFor="stock">Stock</Label>
              <Input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={(e) => handleChange("stock", e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="cursor-pointer" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="cursor-pointer">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
