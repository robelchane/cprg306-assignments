"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newId = Math.random().toString(36);
    const newItem = { id:newId, name, quantity, category };
    onAddItem(newItem);
    console.log(newItem);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="flex justify-left">
      <form onSubmit={handleSubmit} className="bg-green-500 ml-4 p-4">
        <div className="mb-4">
          <input type="text" id="name" name="name" value={name}
            onChange={(event) => setName(event.target.value.toLowerCase())}
            required
            placeholder="Item Name"
            className="mt-1 p-2 rounded-md w-full"
          />
        </div>

        <div className="flex justify-between">
          <div className="w-1/3 pr-2">           
            <input type="number" id="quantity" name="quantity" min="1" max="99" value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="w-1/2 pl-2">
            <select id="category" name="category" value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="mt-1 p-2 border rounded-md w-full"
            >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
            </select>
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white w-full p-2 mt-4 rounded-md hover:bg-blue-800">
          +
        </button>
      </form>
    </div>
  );
}
