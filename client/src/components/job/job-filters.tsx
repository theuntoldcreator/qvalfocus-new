import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface JobFiltersProps {
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onLevelChange: (value: string) => void;
  onIndustryChange: (value: string) => void;
}

export function JobFilters({ onSearchChange, onLocationChange, onTypeChange, onLevelChange, onIndustryChange }: JobFiltersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter Jobs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Search by title, company..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Input
          placeholder="Location"
          onChange={(e) => onLocationChange(e.target.value)}
        />
        <Select onValueChange={onTypeChange}>
          <SelectTrigger><SelectValue placeholder="Job Type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={onLevelChange}>
          <SelectTrigger><SelectValue placeholder="Experience Level" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Internship">Internship</SelectItem>
            <SelectItem value="Entry-level">Entry-level</SelectItem>
            <SelectItem value="Mid-level">Mid-level</SelectItem>
            <SelectItem value="Senior">Senior</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={onIndustryChange}>
          <SelectTrigger><SelectValue placeholder="Industry" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="Healthcare">Healthcare</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}