"use client";
import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);

  // Sorting function
  const sortItems = () => {
    let sortedItems = [...items];

    if (!groupByCategory) {
      sortedItems.sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
      });
    }

    return sortedItems;
  };

  // Event handlers for sorting buttons
  const handleSortByName = () => {
    setSortBy('name');
    setGroupByCategory(false);
  };

  const handleSortByCategory = () => {
    setSortBy('category');
    setGroupByCategory(false);
  };

  return (
    <main>
      <div className="text-2xl font-bold m-4"> 
        Sort by:
        {/* Sorting buttons */}
        <button
          onClick={handleSortByName}
          style={{ background: sortBy === 'name' ? 'orange' : 'gray', margin: '10px', padding: '5px 10px'}}  
        >
          Name
        </button>
        <button
          onClick={handleSortByCategory}
          style={{ background: sortBy === 'category' ? 'orange' : 'gray', margin: '10px', padding: '5px 10px' }}
        >
          Category
        </button>
      </div>
      <div>
        {sortItems().map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
