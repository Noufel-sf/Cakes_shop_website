import React from "react";
import Banner from "./Homepage/Banner";
import Cake1 from "../assets/rose.png";
import Cake2 from "../assets/rose2.png";
import Cake3 from "../assets/rose3.png";
import Cake4 from "../assets/rose4.png";

import Cake from "./Cakespage/Cake";
import { Link } from "react-router-dom";
import { useCart } from './CartContext';

const Cakeslist = [
  { img: Cake1, name: "Chocolate Cake",  price: 20 ,category:"chocolate",isAdded: false,Qty:0 },
  { img: Cake2, name: "Vanilla Cake",    price: 18 ,category:"chocolate",isAdded: false,Qty:0 },
  { img: Cake3, name: "Red Velvet Cake", price: 22 ,category:"chocolate",isAdded: false,Qty:0 },
  { img: Cake4, name: "Red Velvet Cake", price: 22 ,category:"chocolate",isAdded: false,Qty:0 },
];

function Owncake() {
    const { addToCart } = useCart();


  return (
    <div className="max-w-[80%] mx-auto bg-white p-8 mt-12 title">
      <h2 className="text-3xl lg:text-5xl title capitalize font-bold text-center mb-6 text-[var(--secondary-color)]">
        Create Your Own Cake
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-gray-700">
            Cake Flavor
          </label>
          <input
            type="text"
            placeholder="Chocolate, Vanilla, Strawberry..."
            className="mt-1 block w-full rounded-md  shadow-md p-3  focus:border-[var(--primary-color)] focus:outline-none focus:border-2"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700">
            Cake Size
          </label>
          <select className="mt-1 block w-full rounded-md shadow-md p-3">
            <option>Small (6 inch)</option>
            <option>Medium (8 inch)</option>
            <option>Large (10 inch)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700">
            Frosting
          </label>
          <input
            type="text"
            placeholder="Buttercream, Whipped, Ganache..."
            className="mt-1 block w-full rounded-md shadow-md p-3  focus:border-[var(--primary-color)] focus:outline-none focus:border-2"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700">
            Toppings
          </label>
          <input
            type="text"
            placeholder="Berries, Nuts, Chocolate Chips..."
            className="mt-1 block w-full rounded-md shadow-md p-3  focus:border-[var(--primary-color)] focus:outline-none focus:border-2"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-bold  text-gray-700">
            Additional Notes
          </label>
          <textarea
            rows="4"
            placeholder="Any special instructions..."
            className="mt-1 block w-full rounded-md shadow-md p-3 focus:border-[var(--primary-color)] focus:outline-none focus:border-2"
          ></textarea>
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-[var(--secondary-color)] hover:bg-[var(--secondary-color)] text-white font-semibold px-6 py-3 rounded-lg mt-4 cursor-pointer transition duration-300 text-lg title"
          >
            Submit Request
          </button>
        </div>
      </form>
      <div className="mt-30 flex flex-col items-center justify-center mx-auto gap-25 ">
        <h1 className="text-3xl lg:text-6xl text-center font-bold mt-10 title text-[var(--primary-color)]">
          Cakes
        </h1>
        <p className="text-center mt-12 text-2xl lg:text-4xl">
          Explore our delicious range of cakes, perfect for any occasion!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 mt-10 px-4">
          {Cakeslist.map((cake, index) => (
            <Cake
              key={index}
              img={cake.img}
              name={cake.name}
              price={cake.price}
              Qty={cake.Qty}
              loading="lazy"
              AddTocart={() => addToCart(cake)}
              data-category={cake.category}
              
            />
          ))}
        </div>
        <Link to="/cakes">
          <button className="bg-[var(--primary-color)]  hover:bg-[var(--secondary-color)] transition duration-300  capitalize text-white py-4 px-12 font-bold cursor-pointer rounded-full text-2xl title">
            Explore all cakes
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Owncake;
