import { Search } from "lucide-react";

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (c: string) => void;
  sortBy: string;
  onSortChange: (s: string) => void;
}

const SearchFilter = ({
  searchQuery, onSearchChange,
  categories, selectedCategory, onCategoryChange,
  sortBy, onSortChange,
}: SearchFilterProps) => {
  return (
    <div className="glass-card p-4 sm:p-6 mb-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
        />
      </div>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <option value="All">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <option value="default">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name">Name: A-Z</option>
      </select>
    </div>
  );
};

export default SearchFilter;
