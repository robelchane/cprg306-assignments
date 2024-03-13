"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas ({ ingredient }){
    const [meals, setMeals] = useState([]);
    
    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas || []);
    };

    useEffect(() =>{
        loadMealIdeas(ingredient);
    },[ingredient]);

    return(
        <div>
            <h2>Meal Ideas:</h2>
            {meals ? (
            <div>
                <p>Here are some meal ideas using {ingredient}: </p>
                <ul className="flex justify-left">
                    {meals.map(meal => (
                    <li className="m-4" key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <p>{meal.strMeal}</p>
                    </li>
                    ))}
                </ul>
            </div>
            ):(<p className="m-4">No meal ideas found for {ingredient}.</p>)}
        </div>
    );
}
