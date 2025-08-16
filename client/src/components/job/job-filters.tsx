import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useDebounce } from "@/hooks/use-debounce";

interface JobFiltersProps {
  className?: string;
  onFiltersChange?: (filters: { search: string; location: string; type: string }) => void;
}

export function JobFilters({ className, onFiltersChange }: JobFiltersProps) {
  const [filters, setFilters] = useState({
    search: "",
    location: "All Locations",
    type: "All Types"
  });
  const debouncedSearch = useDebounce(filters.search, 300);

  useEffect(() => {
    if (onFiltersChange) {
      onFiltersChange({ ...filters, search: debouncedSearch });
    }
  }, [debouncedSearch, filters.location, filters.type, onFiltersChange]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className={cn("flex flex-col md:flex-row items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-md", className)}>
      <div className="relative flex-grow w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        <Input 
          placeholder="Search by title, skills, or keyword..."
          className="pl-10 bg-slate-100 dark:bg-slate-700 border-0"
          value={filters.search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
        />
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto">
        <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
          <SelectTrigger className="min-w-[150px] w-full md:w-auto bg-slate-100 dark:bg-slate-700 border-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Locations">All Locations</SelectItem>
            <SelectItem value="New York">New York</SelectItem>
            <SelectItem value="San Francisco">San Francisco</SelectItem>
            <SelectItem value="London">London</SelectItem>
            <SelectItem value="Remote">Remote</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filters.type} onValueChange={(value) => handleFilterChange("type", value)}>
          <SelectTrigger className="min-w-[120px] w-full md:w-auto bg-slate-100 dark:bg-slate-700 border-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Types">All Types</SelectItem>
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}