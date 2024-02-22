"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowDownLeftFromCircle,
  Bookmark,
  Check,
  MinusCircle,
  PlusCircle,
  Users,
} from "lucide-react";

function RecipieDetails({ recipe }) {
  const [quantity, setQuantity] = useState(1);
  // console.log(recipe);
  function addOnQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
    // console.log(quantity);
  }
  function reduceOnQuantity() {
    quantity > 0
      ? setQuantity((prevQuantity) => prevQuantity - 1)
      : setQuantity(1);
    // console.log(quantity);
  }
  return (
    <div className="flex    gap-12 w-full relative  flex-col ">
      <div className="object-contain ">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          width={700}
          height={400}
          className="bg-violet-400  object-center  h-[400px]"
        />
      </div>
      <h2 className="flex absolute  items-center justify-center py-3 font-bold text-violet-50 text-3xl w-auto px-6 mt-[22rem] left-[12rem]  rotate-[-6deg] bg-violet-500">
        {recipe.strMeal}
      </h2>
      <div className=" flex mt-3 items-center justify-evenly ">
        <ul className="flex  gap-8 justify-center">
          <li className="flex gap-4 ">
            <ArrowDownLeftFromCircle className="text-violet-800" />
            <h2>60 MINUTES</h2>
          </li>
          <li className="flex gap-3 ">
            <Users />
            <h2>{quantity} SERVINGS</h2>{" "}
            <button onClick={reduceOnQuantity}>
              {" "}
              <MinusCircle className="text-violet-800" />
            </button>
            <button onClick={addOnQuantity}>
              {" "}
              <PlusCircle className="text-violet-800" />
            </button>
          </li>
        </ul>
        <button className="bg-violet-600 rounded-full p-2">
          <Bookmark className="text-violet-50" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-violet-700 flex font-bold">RECIPIE INGREDIENTS</h1>
        <div className="grid grid-cols-2 gap-8 py-4 px-4">
          <li className="flex gap-3">
            <Check className="text-red-500" />
            <p>{recipe.strIngredient1}</p>
          </li>{" "}
          <li className="flex gap-3">
            <Check className="text-red-500" />
            <p>{recipe.strIngredient2}</p>
          </li>{" "}
          <li className="flex gap-3">
            <Check className="text-red-500" />
            <p>{recipe.strIngredient3}</p>
          </li>{" "}
          <li className="flex gap-3">
            <Check className="text-red-500" />
            <p>{recipe.strIngredient4}</p>
          </li>{" "}
          <li className="flex gap-3">
            <Check className="text-red-500" />
            <p>{recipe.strIngredient5}</p>
          </li>{" "}
          <li className="flex gap-3">
            <Check className="text-red-500" />
            <p>{recipe.strIngredient6}</p>
          </li>{" "}
          <li className="flex gap-3">
            <Check className="text-red-500" />
            <p>{recipe.strIngredient7}</p>
          </li>
          <li className="flex gap-3">
            <Check className="text-red-500" />
            <p>{recipe.strIngredient8}</p>
          </li>
        </div>
      </div>
    </div>
  );
}

export default RecipieDetails;
