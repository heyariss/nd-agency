"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AddProjectModal } from "@/components/moleculs/add-project-modal";
import { Badge } from "@/components/ui/badge";
import { Dot, FilePenLine, Trash2 } from "lucide-react";

interface Portfolio {
  id: number;
  title: string;
  description: string;
  categories: string;
  client_name: string;
  duration_project: string;
  status: string;
  image_url?: string;
}

export default function ManagementPortalPage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const fetchPortfolios = async () => {
    const { data, error } = await supabase.from("portfolios").select("*");

    if (error) {
      console.error("Error fetching portfolios:", error.message);
    } else {
      setPortfolios(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(portfolios.map((portfolio) => portfolio.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    }
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) return;
  
    try {
      // Ambil data yang akan dihapus untuk mendapatkan nama file
      const { data: portfoliosToDelete, error: fetchError } = await supabase
        .from("portfolios")
        .select("image_url")
        .in("id", selectedIds);
  
      if (fetchError) {
        throw new Error(`Error fetching portfolios: ${fetchError.message}`);
      }
  
      // Hapus file dari storage
      const filesToDelete = portfoliosToDelete
        .map((portfolio) => {
          if (portfolio.image_url) {
            // Ekstrak nama file dari URL
            const urlParts = portfolio.image_url.split("/");
            return urlParts[urlParts.length - 1]; // Ambil nama file
          }
          return null;
        })
        .filter((file) => file !== null);
  
      if (filesToDelete.length > 0) {
        const { error: deleteFileError } = await supabase.storage
          .from("portfoliogallery") // Nama bucket storage
          .remove(filesToDelete);
  
        if (deleteFileError) {
          throw new Error(`Error deleting files: ${deleteFileError.message}`);
        }
      }
  
      // Hapus data dari tabel
      const { error: deleteDataError } = await supabase
        .from("portfolios")
        .delete()
        .in("id", selectedIds);
  
      if (deleteDataError) {
        throw new Error(`Error deleting portfolios: ${deleteDataError.message}`);
      }
  
      alert("Selected portfolios and associated files deleted successfully!");
      fetchPortfolios(); // Refresh data
      setSelectedIds([]); // Reset selected IDs
    } catch (error) {
      console.error("Error during deletion:", error);
      alert(`Failed to delete: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
    }
  };

  const handleEdit = () => {
    if (selectedIds.length !== 1) {
      alert("Please select exactly one portfolio to edit.");
      return;
    }

    const portfolioToEdit = portfolios.find(
      (portfolio) => portfolio.id === selectedIds[0]
    );
    if (portfolioToEdit) {
      // Implement your edit logic here
      alert(`Editing portfolio: ${portfolioToEdit.title}`);
    }
  };

  return (
    <>
      <div className="min-h-[100vh] rounded-xl outline outline-slate-200 outline-1 flex-1 md:min-h-min p-2">
        <div className="mb-4 p-2 align-middle flex justify-between">
          <div>
            <h1 className="font-extrabold">Management Portal</h1>
            <p className="text-slate-500">Edit your portfolio here.</p>
          </div>
          <div className="flex space-x-2">
            <AddProjectModal onAdd={fetchPortfolios} />
            <Button variant="secondary" onClick={handleEdit}>
              <FilePenLine />
              Edit Project
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              <Trash2 />
              Delete
            </Button>
          </div>
        </div>

        <Table>
          <TableCaption>
            {loading
              ? "Loading..."
              : portfolios.length === 0
              ? "No data available."
              : "A list of your recent portfolios."}
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox
                  checked={selectedIds.length === portfolios.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="w-[200px]">Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Client Name</TableHead>
              <TableHead>Duration Project</TableHead>
              <TableHead className="text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {portfolios.map((portfolio) => (
              <TableRow key={portfolio.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedIds.includes(portfolio.id)}
                    onCheckedChange={(checked) =>
                      handleSelectRow(portfolio.id, !!checked)
                    }
                  />
                </TableCell>
                <TableCell className="font-medium">{portfolio.title}</TableCell>
                <TableCell>{portfolio.description}</TableCell>
                <TableCell>{portfolio.categories}</TableCell>
                <TableCell>{portfolio.client_name}</TableCell>
                <TableCell>{portfolio.duration_project}</TableCell>
                <TableCell className="text-center">
                  <Badge variant="secondary" className="text-white">
                    <Dot /> {portfolio.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}