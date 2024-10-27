"use client";
import Link from "next/link";
import { useContext } from "react";
import { RecipeContext } from "@/app/recipe/context/context";
import { RecipeContextType } from "@/app/recipe/context/context";

export default function Navbar() {
  const { searchParam, setsearchParam, handleSubmit } = useContext(
    RecipeContext
  ) as RecipeContextType;
  return (
    <>
      <nav className="flex justify-around items-center py-10 shadow lg:flex-row flex-col">
        <h1 className="text-[32px] font-semibold">
          <Link href={"/recipe/"}> Food Recipe</Link>
        </h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="recipe"
              placeholder="Enter Items"
              onChange={(event) => setsearchParam(event.target.value)}
              className="w-[300px] py-2 shadow shadow-emerald-500 rounded-full px-3 focus:outline-none"
            />
          </form>
        </div>
        <ul>
          <li>
            <Link href={"/recipe/"}>Home</Link>
          </li>
          <li>
            <Link href={"/recipe/favorite"}>Favorite</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
