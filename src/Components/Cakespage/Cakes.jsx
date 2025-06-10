// Updated Cakes component
// src/components/Cakes.js
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import Cake from './Cake';
import Services from '../Homepage/Services';

import Cake1 from '../../assets/Cakebanner.png';
import Cake2 from '../../assets/rose.png';
import Cake3 from '../../assets/rose2.png';
import Cake4 from '../../assets/rose3.png';
import Cake5 from '../../assets/rose4.png';
import Cake6 from '../../assets/rose5.png';
import Cake7 from '../../assets/rose6.png';
import Cake8 from '../../assets/rose.png';

const Cakeslist = [
  { img: Cake1, name: 'Chocolate Cake', price: 20, category: 'chocolate' ,isAdded:false,Qty:0},
  { img: Cake2, name: 'Vanilla Cake', price: 18, category: 'chocolate'   ,isAdded:false,Qty:0},
  { img: Cake3, name: 'Red Velvet Cake', price: 22, category: 'lemon'    ,isAdded:false,Qty:0},
  { img: Cake4, name: 'Lemon Cake', price: 19, category: 'rosey'         ,isAdded:false,Qty:0},
  { img: Cake5, name: 'Birthday Cake 1', price: 39, category: 'birthday' ,isAdded:false,Qty:0},
  { img: Cake6, name: 'Birthday Cake 2', price: 29, category: 'birthday' ,isAdded:false,Qty:0},
  { img: Cake7, name: 'Fancy Lemon Cake', price: 79, category: 'lemon'   ,isAdded:false,Qty:0},
  { img: Cake8, name: 'Rosy Delight', price: 69, category: 'rosey'       ,isAdded:false,Qty:0},
];

const categories = ['all', 'chocolate', 'lemon', 'rosey', 'birthday'];

function Cakes() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCakes =
    selectedCategory === 'all'
      ? Cakeslist
      : Cakeslist.filter((cake) => cake.category === selectedCategory);

  return (
    <div className='title bg-white mt-40'>
      <h1 className='text-3xl lg:text-6xl text-center font-bold mt-10 text-[var(--primary-color)]'>Cakes</h1>
      <p className='text-center mt-12 text-2xl lg:text-4xl'>
        Explore our delicious range of cakes, perfect for any occasion!
      </p>
      <ul className='flex items-center gap-5 justify-center mt-10 lg:gap-22'>
        {categories.map((cat) => (
          <li
            key={cat}
            className={`capitalize text-xl lg:text-4xl font-bold cursor-pointer ${
              selectedCategory === cat ? 'text-[var(--primary-color)]' : 'text-[var(--secondary-color)]'
            } hover:text-[var(--primary-color)] transition duration-300`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-4'>
        {filteredCakes.map((cake, index) => (
          <Cake
            key={index}
            img={cake.img}
            name={cake.name}
            price={cake.price}
            Qty={cake.Qty}
            loading="lazy"
            data-category={cake.category}
            AddTocart={() => addToCart(cake)}
          />
        ))}
      </div>
      <Services />
    </div>
  );
}

export default Cakes;
