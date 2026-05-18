import { useState, useMemo } from "react";
import { parts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SearchFilter from "@/components/SearchFilter";

const PartsPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result = parts.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All" || p.category === category;
      return matchSearch && matchCat;
    });
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sortBy === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [search, category, sortBy]);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold mb-2">
          Auto <span className="gradient-text">Parts</span>
        </h1>
        <p className="text-muted-foreground mb-8">Quality parts for peak performance</p>
        <SearchFilter
          searchQuery={search} onSearchChange={setSearch}
          categories={["Engine", "Brakes", "Tires", "Batteries", "Lights"]}
          selectedCategory={category} onCategoryChange={setCategory}
          sortBy={sortBy} onSortChange={setSortBy}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No parts found.</p>
        )}
      </div>
    </div>
  );
};

export default PartsPage;
