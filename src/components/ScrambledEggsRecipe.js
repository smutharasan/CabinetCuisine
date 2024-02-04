// ScrambledEggsRecipe.js
import React from 'react';

const ScrambledEggsRecipe = () => {
  return (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4">Scrambled Eggs Recipe</h1>

      {/* Macro Nutrients */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Macro Nutrients</h2>
        <ul>
          <li>Protein: 20g</li>
          <li>Fat: 15g</li>
          <li>Carbohydrates: 2g</li>
        </ul>
      </div>

      {/* Ingredient List */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <li>4 eggs</li>
          <li>2 tablespoons of milk</li>
          <li>Salt and pepper to taste</li>
          <li>Butter for cooking</li>
        </ul>
      </div>

      {/* Instructions */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol>
          <li>Crack the eggs into a bowl.</li>
          <li>Add milk, salt, and pepper. Whisk until well combined.</li>
          <li>Heat a non-stick pan over medium heat and add butter.</li>
          <li>Pour the egg mixture into the pan and stir continuously until eggs are cooked.</li>
          <li>Remove from heat and serve hot.</li>
        </ol>
      </div>
    </div>
  );
};

export default ScrambledEggsRecipe;