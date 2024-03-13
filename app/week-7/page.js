"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  function handleItemSelect(itemName) {
    setSelectedItemName(itemName.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD10-\uDDFF])|/g, ''));
  }


  return (
    <main className="p-2">
      <div>
        <p className="text-3xl font-bold mb-4 ml-4">Shopping List</p>
        <p className="text-2xl font-bold ml-4">Add New Item</p>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      
      <div>
        <MealIdeas ingredient={selectedItemName} />
      </div>      
    </main>
  );
}
