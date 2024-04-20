"use client";

import Link from 'next/link'; // Import Link component
import ItemList from './item-list.js';
import NewItem from "./new-item";
import MealIdeas from './meal-ideas.js';
import { getItems } from '../_services/shopping-list-service';
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user } = useUserAuth();
    
    const loadItems = async () => {
        if (user && user.uid) { // Check if user and user.uid are both not null
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems);
        }
    };

    function handleItemSelect (newItem) {
        const newItemSplit = newItem.split(',');
        const newItemNoEmoji = newItemSplit[0].replace(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g, '');
        const newItemTrimmed = newItemNoEmoji.trim();

        setSelectedItemName(newItemTrimmed);
    };

    const handleAddItem = (newItem) => {
        const newItems = [...items, newItem];
        setItems(newItems);
    };

    useEffect(() => {
        if (user) {
          loadItems();
        }
    }, [user]);

    // Ensure all useEffect are placed at the top level
    useEffect(() => {
        if (user && user.uid) {
            loadItems();
        }
    }, [user.uid]);

    if (!user) {
        return <Link href="/week8">Please log in to view the shopping list.</Link>
    }

    return (
        <main className="bg-slate-950">
            <h1 className='pl-4 pt-4 text-3xl text-white font-extrabold'>Shopping List</h1>
            <div className="flex">
                <div className="">
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    )
}
