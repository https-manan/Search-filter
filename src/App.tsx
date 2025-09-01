import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";


import shoe1 from "./assets/shoe1.png";
import shoe2 from "./assets/shoe2.png";
import shoe3 from "./assets/shoe3.png";
import shoe4 from "./assets/shoe4.png";
import shoe5 from "./assets/shoe5.png";
import shoe6 from "./assets/shoe6.png";
import shoe7 from "./assets/shoe7.png";
import shoe8 from "./assets/shoe8.png";
import shoe9 from "./assets/shoe9.png";
import shoe10 from "./assets/shoe10.png";
import shoe11 from "./assets/shoe11.png";
import shoe12 from "./assets/shoe12.png";
import shoe13 from "./assets/shoe13.png";
import shoe14 from "./assets/shoe14.png";
import shoe15 from "./assets/shoe15.png";
import shoe16 from "./assets/shoe16.png";
import shoe17 from "./assets/shoe17.png";
import shoe18 from "./assets/shoe18.png";
import shoe19 from "./assets/shoe19.png";
import shoe20 from "./assets/shoe20.png";
import shoe21 from "./assets/shoe21.png";

const shoes = [
  { image: shoe1, name: "Nike Air Zoom Pegasus", starCount: 4, price: 3200 },
  { image: shoe2, name: "Adidas Ultraboost 22", starCount: 5, price: 5800 },
  { image: shoe3, name: "Puma RS-X³ Puzzle", starCount: 2, price: 4200 },
  { image: shoe4, name: "Reebok Classic Leather", starCount: 1, price: 3100 },
  { image: shoe5, name: "New Balance 574", starCount: 3, price: 3500 },
  { image: shoe6, name: "Nike React Infinity Run", starCount: 4, price: 7600 },
  { image: shoe7, name: "Adidas Yeezy Boost 350", starCount: 4.5, price: 18200 },
  { image: shoe8, name: "Converse Chuck Taylor", starCount: 1, price: 2900 },
  { image: shoe9, name: "Vans Old Skool", starCount: 4, price: 2600 },
  { image: shoe10, name: "Under Armour HOVR Sonic", starCount: 3, price: 4500 },
  { image: shoe11, name: "Fila Disruptor II", starCount: 2, price: 5200 },
  { image: shoe12, name: "Nike Blazer Mid 77", starCount: 3, price: 6100 },
  { image: shoe13, name: "Asics Gel-Kayano 28", starCount: 4, price: 9300 },
  { image: shoe14, name: "Skechers D'Lites", starCount: 3, price: 2700 },
  { image: shoe15, name: "Balenciaga Triple S", starCount: 5, price: 24500 },
  { image: shoe16, name: "Stiletto Heels", starCount: 4, price: 5400 },
  { image: shoe17, name: "Block Heel Sandals", starCount: 2, price: 3900 },
  { image: shoe18, name: "Wedge Heels", starCount: 3, price: 3200 },
  { image: shoe19, name: "Kitten Heels", starCount: 4, price: 2800 },
  { image: shoe20, name: "Peep Toe Heels", starCount: 1, price: 7200 },
  { image: shoe21, name: "Platform Heels", starCount: 1, price: 6600 },
];

function App() {
  return (
    <div className="p-6">
      {/* Navbar always on top */}
      <Navbar />
       <div className="flex mt-6 gap-6">
     {/* Sidebar */}
       <Sidebar />

      {/* Shoes grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {shoes.map((shoe, index) => (
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
