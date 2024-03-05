"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-2">
      <p className="text-3xl font-bold mb-4 ml-4">Shopping List</p>
      <p className="text-2xl font-bold ml-4">Add New Item</p>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
