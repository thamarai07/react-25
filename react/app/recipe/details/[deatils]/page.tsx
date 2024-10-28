"use client";

import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { RecipeContext, RecipeContextType } from "../../context/context";

export default function RecipePage() {
  const url = new URL(window && window.location.href);
  const name = url.pathname.split("/");
  const len = name.length - 1;
  const finded = name[len];

  const { RecipeData, setRecipeData ,handleFavorite,Favorite} = useContext(
    RecipeContext
  ) as RecipeContextType;

  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error messages

  useEffect(() => {
    async function fetchRecipeDetails() {
      setLoading(true); // Set loading to true when starting the fetch
      setError(null); // Reset error state before fetching

      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${finded}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json(); // Await here to get the actual data
        setRecipeData(data.data); // Set the fetched data to context
      } catch (error: any) {
        console.error("Failed to fetch recipe details:", error);
        setError(error.message || "Something went wrong"); // Set the error message
      } finally {
        setLoading(false); // Set loading to false after the fetch is done
      }
    }

    fetchRecipeDetails();
  }, [finded]); // Add `finded` to the dependency array

  // Conditional rendering based on loading and error states
  if (loading) {
    return <p>Loading...</p>; // Display loading state
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error state
  }

  // Destructure relevant data from RecipeData

  const {
    cooking_time,
    id,
    image_url,
    ingredients,
    publisher,
    servings,
    source_url,
    title,
  } = RecipeData.recipe;

  console.log(RecipeData.recipe)

  return (
    <div className="bg-emerald-200 p-4 max-w-[786px] m-auto mt-10 shadow rounded mb-10">
      {RecipeData.recipe && (
        <div>
          <h1 className="text-center text-[24px] font-semibold">{title}</h1>
          <img
            src={image_url}
            alt={title}
            className="m-auto mt-4 mb-4 shadow-md rounded-xl"
          />
          <p className="mt-2 mb-2 underline text-[18px] font-semibold text-center">
            Ingredients
          </p>
          {ingredients.map((vs) => (
              <span className="bg-emerald-600 m-4 p-2 w-[180px] inline-block text-center rounded-lg text-white">
                {vs.description} - {vs.quantity}
              </span>
          ))}
          <div className="flex  justify-around mt-10 ">
           <p className="text-center">Publisher : {publisher}</p>
           <p className="text-center">cooking_time : {cooking_time}</p>
         
           </div>
           <div className="flex justify-center items-center mt-10 pb-10">
            <button onClick={()=>handleFavorite(RecipeData.recipe)} className="p-2 w-[20%] m-auto outline-none text-slate-700 rounded shadow shadow-orange-400">
            
            {Favorite && Favorite.length > 0 && Favorite.findIndex(item =>item.id === RecipeData.recipe.id ) !== -1 ? "Remove from Favorite" :  "Save as Favorite"}
              
            </button>
           </div>
        </div>
      )}
    </div>
  );
}
