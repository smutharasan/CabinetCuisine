import React from 'react';
import '../index.css';
//Create categories and searchbar, 
// Separate RecipeCard component
const RecipeCard = ({ name, cuisine, rating, cookingTime, imageUrl }) => (
  <div className="recipe-card">
    <img src={imageUrl} alt={name} />
    <div className="recipe-details">
      <h3>{name}</h3>
      <p>Cuisine: {cuisine}</p>
      <p>Cooking Time: {cookingTime} mins</p>
    </div>
  </div>
);

const Dashboard = () => {
  const recipe = [
    {
      name: 'Butter Chicken',
      cuisine: 'Indian',
      cookingTime: 30,
      imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
      name: 'Japanese Sushi and Sashimi',
      cuisine: 'Japanese',
      cookingTime: 50,
      imageUrl: 'https://images.unsplash.com/photo-1601059286024-61032e83b203?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
      name: 'Baklava',
      cuisine: 'Turkish',
      cookingTime: 50,
      imageUrl: 'https://images.unsplash.com/photo-1617806501441-2a4a45c5316c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Welcome to PantryPal</h1>
        {/* Add navigation or other header components */}
      </header>
      <section className="recipe-list">
        {recipe.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </section>
      {/* Add other sections or components as needed */}
    </div>
  );
};

export default Dashboard;