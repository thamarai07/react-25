"use client";

import React, { useContext } from "react";
import {
  RecipeContext,
  RecipeContextType,
  resultInterFace,
} from "../context/context";
import Image from "next/image";
import Link from "next/link";

export default function Favorite() {
  const { Favorite } = useContext(RecipeContext) as RecipeContextType;

  console.log(Favorite, "Favorite");
  return (
    <>
      <div className="flex flex-wrap justify-between gap-4 p-4 max-w-[1024px] m-auto">
        {Favorite && Favorite.length > 0 ? (
          Favorite.map((values: any) => (
            <div
              key={values.id}
              className="recipe__container w-full sm:w-[48%] md:w-[32%] lg:w-[32%] p-4 rounded-md flex flex-col items-center shadow-lg"
            >
              <p className="recipe__title text-lg font-semibold text-center mb-2 text-black">
                {values.title}
              </p>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src={values.image_url}
                  alt={values.title}
                  fill
                  className="object-cover"
                />
              </div>
              <Link
                className="bg-emerald-600 text-[18px] font-semibold p-2 mt-4 rounded-lg shadow-lg text-white"
                href={"/recipe/details/" + values.id}
              >
                Recipe Details
              </Link>
            </div>
          ))
        ) : (
          <p className="text-[34px] font-semibold text-center w-full">
           Noting Is added in your Favorite
          </p>
        )}
      </div>
    </>
  );
}
