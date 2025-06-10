import React from "react";
import cakeImage from "../../assets/rose.png";
import headerimg from "../../assets/headerimg.png";
import Cake1 from "../../assets/Cakebanner.png";
import Cake2 from "../../assets/rose2.png";
import Cake3 from "../../assets/rose3.png";
import Cake4 from "../../assets/rose4.png";
import Cake from "../Cakespage/Cake";
import Services from "./Services";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import { useCart } from '../CartContext';

const Cakeslist = [
  { img: Cake1, name: "Chocolate Cake", price: 20  ,category:"lemon cake",isAdded:false,Qty:0},
  { img: Cake2, name: "Vanilla Cake", price: 18    ,category:"lemon cake",isAdded:false,Qty:0},
  { img: Cake3, name: "Red Velvet Cake", price: 22 ,category:"lemon cake",isAdded:false,Qty:0},
  { img: Cake4, name: "Red Velvet Cake", price: 22 ,category:"lemon cake",isAdded:false,Qty:0},
];


function Hero() {
  
  const { addToCart } = useCart();


  return (
    <div className="">
      <div
        className=" h-[70vh] "
        style={{
          backgroundImage: `url(${headerimg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-between max-w-7xl md:flex-row mx-auto items-center  p-10">
          {/* Left Text Section */}
          <div className="flex title flex-col gap-12 text-center md:text-left items-center md:items-start">
            <h2
              className="capitalize text-5xl md:text-5xl lg:text-7xl font-bold text-[var(--secondary-color)] leading-snug"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Make <br /> your own cake
            </h2>
            <p
              className="title w-1/2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {" "}
              Lorem ipsum Unde, ea neque eaque in a quam odit officia pariatur
              animi nihil magnam labore enim consequuntur at facere, eaque culpa
              suscipit officiis facilis quod.
            </p>
            <Link to="/owncake"> 
            <button
              className="bg-[var(--secondary-color)] text-white font-semibold px-15 text-3xl title py-3 rounded-full capitalize cursor-pointer w-fit self-center md:self-start hover:bg-[var(--secondary-color)] transition"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              make it
            </button>
            </Link>
          </div>

          {/* Right Image Section */}
          <div className="mt-10 md:mt-0">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={cakeImage}
              alt="Cake with candles"
              className="w-[400px] md:w-[600px] lg:w-[900px]"
            />
          </div>
        </div>{" "}
      </div>

      {/* Services Section */}
      <Services />
      <section className="flex flex-col mt-40 items-center justify-center mt-10 mx-auto gap-25 ">
        <h1 className="capitalize text-2xl lg:text-5xl font-bold text-[var(--primary-color)] title">
          Explore our Cakes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 mt-10 px-4">
          {Cakeslist.map((cake, index) => (
            <Cake
              key={index}
              img={cake.img}
              name={cake.name}
              price={cake.price}
              loading="lazy"
              Qty={cake.Qty}
              AddTocart={() => addToCart(cake)}
              data-category={cake.category}
            />
          ))}
        </div>
        <Link to="/cakes">
          <button className="bg-[var(--primary-color)]  hover:bg-[var(--secondary-color)] transition duration-300  capitalize text-white py-4 px-12 font-bold cursor-pointer rounded-full text-2xl title">
            Explore all cakes
          </button>
          {" "}
        </Link>
      </section>

      {/* Banner section */}
      <Banner />
    </div>
  );
}

export default Hero;
