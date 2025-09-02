import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import shoes from "./db/data.js";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");

  // Filtering logic
  const filteredShoes = shoes.filter((shoe) => {
  
    const matchesSearch = shoe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    
    const matchesCategory =
      selectedCategory === "All" || shoe.category === selectedCategory;

    let matchesPrice = true;
    if (selectedPrice === "5000") matchesPrice = shoe.price < 5000;
    else if (selectedPrice === "10000") matchesPrice = shoe.price < 10000;
    else if (selectedPrice === "20000") matchesPrice = shoe.price < 20000;
    else if (selectedPrice === "above20000") matchesPrice = shoe.price >= 20000;

    const matchesRating =
      selectedRating === "All" || shoe.starCount >= Number(selectedRating);

    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <div className="p-6">
      {/* Search bar */}
      <Navbar setSearchQuery={setSearchQuery} />

      <div className="flex mt-6 gap-6">
        {/* Sidebar filters */}
        <Sidebar
          setSelectedCategory={setSelectedCategory}
          setSelectedPrice={setSelectedPrice}
          setSelectedRating={setSelectedRating}
        />

        {/* Shoes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredShoes.map((shoe, index) => (
            <Card
              key={index}
              image={shoe.image}
              name={shoe.name}
              starCount={shoe.starCount}
              price={`₹${shoe.price}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
