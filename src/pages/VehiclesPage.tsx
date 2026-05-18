import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { vehicles } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import SearchFilter from "@/components/SearchFilter";

const VehiclesPage = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "All";
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCat);
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result = vehicles.filter((v) => {
      const matchSearch = v.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All" || v.category === category;
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
          Our <span className="gradient-text">Vehicles</span>
        </h1>
        <p className="text-muted-foreground mb-8">Find your dream ride from our premium collection</p>
        <SearchFilter
          searchQuery={search} onSearchChange={setSearch}
          categories={["Cars", "Bikes", "SUVs", "Electric"]}
          selectedCategory={category} onCategoryChange={setCategory}
          sortBy={sortBy} onSortChange={setSortBy}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v) => (
            <ProductCard key={v.id} {...v} showDetails />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No vehicles found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default VehiclesPage;
