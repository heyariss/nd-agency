"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from '@supabase/supabase-js';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DateRangePicker } from "@/components/moleculs/dateRangePicker";
import { DateRange } from "react-day-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";

export function AddProjectModal({ onAdd }: { onAdd: () => void }) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [categories, setCategories] = useState("");
  const [description, setDescription] = useState("");
  const [clientName, setClientName] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const maxLength = 500;

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= maxLength) {
      setDescription(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let fileUrl = null;
      if (file) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;

        // Upload file ke Supabase Storage
        const { data: fileData, error: fileError } = await supabase.storage
          .from("portfoliogallery") // Pastikan nama bucket benar
          .upload(fileName, file);

        if (fileError) {
          throw new Error(`File upload error: ${fileError.message}`);
        }

        // Dapatkan URL file yang diupload
        const { data: publicUrlData } = supabase.storage
          .from("portfoliogallery")
          .getPublicUrl(fileData.path);

        fileUrl = publicUrlData.publicUrl;
      }

      // Format date range menjadi string
      const duration = dateRange
        ? `${dateRange.from?.toISOString().split("T")[0]} to ${
            dateRange.to?.toISOString().split("T")[0]
          }`
        : "";

      // Simpan data portfolio ke tabel portfolios
      const { error } = await supabase.from("portfolios").insert([
        {
          title,
          slug: title.toLowerCase().replace(/\s+/g, "-"),
          description,
          categories,
          client_name: clientName,
          duration_project: duration,
          user_id: user?.id,
          status: "Published",
          image_url: fileUrl, // Gunakan URL file yang diupload
        },
      ]);

      if (error) {
        throw new Error(`Database insert error: ${error.message}`);
      }

      alert("Project added successfully!");
      setTitle("");
      setSlug("");
      setCategories("");
      setDescription("");
      setClientName("");
      setDateRange(undefined);
      setFile(null);

      // Tutup modal
      setIsModalOpen(false);

      onAdd(); // Panggil callback untuk refresh data
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      console.error("Error adding project:", errorMessage);
      alert(`Failed to add project: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Add New Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="border-b-gray-800">
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <ScrollArea className="pr-2 h-96">
            <div className="mx-2 gap-3">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"));
                  }}
                  required
                />
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={slug}
                  readOnly
                  className="bg-gray-100"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Deskripsi proyek Anda..."
                  className="resize-none"
                  required
                />
                <p className="text-sm text-gray-500">
                  {description.length}/{maxLength} karakter
                </p>
              </div>
              <div>
                <Label htmlFor="clientName">Client Name</Label>
                <Input
                  id="clientName"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Project Duration</Label>
                <DateRangePicker
                  onSelect={(range) => setDateRange(range)}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={(value) => setCategories(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="file">Upload Photo</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </div>
            </div>
          </ScrollArea>
          <Button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Project"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}