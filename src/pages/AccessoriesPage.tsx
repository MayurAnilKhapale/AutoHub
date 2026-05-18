import { useState, useMemo } from "react";
import { accessories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SearchFilter from "@/components/SearchFilter";

const AccessoriesPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const cats = [...new Set(accessories.map((a) => a.category))];

  const filtered = useMemo(() => {
    let result = accessories.filter((a) => {
      const matchSearch = a.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All" || a.category === category;
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
          <span className="gradient-text">Accessories</span>
        </h1>
        <p className="text-muted-foreground mb-8">Upgrade your ride with premium accessories</p>
        <SearchFilter
          searchQuery={search} onSearchChange={setSearch}
          categories={cats}
          selectedCategory={category} onCategoryChange={setCategory}
          sortBy={sortBy} onSortChange={setSortBy}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((a) => (
            <ProductCard key={a.id} {...a} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No accessories found.</p>
        )}
      </div>
    </div>
  );
};

export default AccessoriesPage;
