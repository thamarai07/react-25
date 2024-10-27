"use client";
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
  

  async function handleSubmit() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${searchParam}`
      );

      if (!response.ok) {
        setError("error")
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
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
