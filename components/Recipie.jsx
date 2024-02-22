import Image from "next/image";
import React from "react";
import { Key } from "lucide-react";

function recipe({ recipe }) {
  return (
    <a href={`/details/${recipe?.idMeal}`} className="flex gap-6">
      <div className="flex object-cover ">
        <Image
          src={recipe?.strMealThumb}
          width={50}
          height={50}
          alt={recipe?.strMeal}
          className="w-[50px] h-[50px] rounded-full"
        />
      </div>
      <div>
        <h1 className="text-violet-600  font-bold">{recipe?.strMeal}</h1>
        <h2>{recipe?.strCategory}</h2>
      </div>
    </a>
  );
}

export default recipe;
