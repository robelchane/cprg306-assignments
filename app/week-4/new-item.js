"use client";

import {useState} from "react";

export default function NewItem(){
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Display
    alert(`Added Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    // Reset the state variables to their initial values
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    // Item Name
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="bg-green-500 m-24 p-4 rounded-md shadow-md">
        <div className="mb-4">
          <input type="text" id="name" name="name" value={name}
            onChange={(event) => setName(event.target.value)}
            required
            placeholder="Item Name"
            className="mt-1 p-2 rounded-md w-full"
          />
        </div>

        {/* Quantities */}
        <div className="flex justify-between">
          <div className="w-1/3 pr-2">           
            <input type="number" id="quantity" name="quantity" min="1" max="99" value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          {/* categories */}
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

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white w-full p-2 mt-4 rounded-md hover:bg-blue-800">
          +
        </button>
      </form>
    </div>
  );

}
