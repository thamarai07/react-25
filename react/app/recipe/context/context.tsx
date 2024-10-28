"use client";
import Router from 'next/router';
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

export interface resultInterFace {
  publisher: string;
  image_url: string;
  title: string;
  id: string;
}

export interface ingInterface {
  quantity: number;
  unit: string;
  description: string;
}

export interface recipeInterface {
  recipe: {
    cooking_time: number;
    id: string;
    image_url: string;
    ingredients: ingInterface[];
    publisher: string;
    servings: number;
    source_url: string;
    title: string;
  };
}

export interface RecipeContextType {
  searchParam: string;
  setsearchParam: Dispatch<SetStateAction<string>>;
  handleSubmit: () => Promise<void>;
  Error: string;
  setError: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  Loading: boolean;
  setData: Dispatch<SetStateAction<resultInterFace[]>>;
  Data: resultInterFace[];
  RecipeData: recipeInterface;
  setRecipeData: Dispatch<SetStateAction<recipeInterface>>;
  handleFavorite: (getCurrentitem: { recipe: recipeInterface }) => void;
  Favorite: recipeInterface[];
}

export const RecipeContext = createContext<RecipeContextType | null>(null);

export default function RecipePassContext({
  children,
}: {
  children: ReactNode;
}) {
  const [searchParam, setsearchParam] = useState<string>("");
  const [Error, setError] = useState<string>("");
  const [Loading, setLoading] = useState<boolean>(true);
  const [Data, setData] = useState<resultInterFace[]>([]);
  const [RecipeData, setRecipeData] = useState<any>();
  const [Favorite, setFavorite] = useState<recipeInterface[]>([]);

  // No need for `await` here

  async function handleSubmit() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${searchParam}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const result = await response.json();
      setData(result.data.recipes || []); // Ensure proper data path
      setLoading(false);
      
    } catch (e: any) {
      setError(e.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (searchParam) {
      handleSubmit();
    }
  }, [searchParam]);

  const handleFavorite = (getCurrentItem: recipeInterface) => {
    const updatedFavorites = [...Favorite];
    const index = updatedFavorites.findIndex(
      (item) => item.recipe.id === getCurrentItem.recipe.id
    );

    if (index === -1) {
      updatedFavorites.push(getCurrentItem);
    } else {
      updatedFavorites.splice(index, 1); // Remove the item if it exists
    }
    setFavorite(updatedFavorites);
  };

  return (
    <RecipeContext.Provider
      value={{
        searchParam,
        setsearchParam,
        handleSubmit,
        Error,
        Loading,
        setError,
        setLoading,
        Data,
        setData,
        RecipeData,
        setRecipeData,
        handleFavorite,
        Favorite,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
