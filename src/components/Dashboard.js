import React from 'react';
import '../index.css';
//Create categories and searchbar, 
// Separate RecipeCard component
const RecipeCard = ({ name, cuisine, cookingTime, imageUrl }) => (
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

  
  const foodCategories = [
    { name: 'Italian', icon: '🍝', link: '#' },
    { name: 'Mexican', icon: '🌮', link: '#' },
    { name: 'Asian', icon: '🍣', link: '#' },
    { name: 'Desserts', icon: '🍰', link: '#' },
    {name: 'Burgers', icon: '🍔', link: '#' },
  ];

  // Second line
const foodCategoriesLine2 = [
  { name: 'Pizza', icon: '🍕', link: '#' },
  { name: 'Salads', icon: '🥗', link: '#' },
  { name: 'Smoothies', icon: '🍹', link: '#' },
  { name: 'BBQ', icon: '🍖', link: '#' },
  { name: 'Seafood', icon: '🦞', link: '#' },
];

  return (
    <div className="dashboard">
      <div className="logo-container">
        Welcome to
    <img src="https://github.com/smutharasan/PantryPal/blob/main/src/Untitled_Artwork.png?raw=true" alt="Logo" className="logo" />
  </div>
  <div className='header'></div>
  <div className="food-categories">
          {foodCategories.map((category, index) => (
            <div key={index} className="category">
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </div>
          ))}
        </div>

   {/* Food Categories - Line 2 */}
   <div className="food-categories">
        {foodCategoriesLine2.map((category, index) => (
          <a key={index} className="category" href={category.link}>
            {category.icon} {category.name}
          </a>
        ))}
      </div>
      <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><a class="menu__item" href="#">Home</a></li>
      <li><a class="menu__item" href="#">About</a></li>
      <li><a class="menu__item" href="#">Recipes</a></li>
      <li><a class="menu__item" href="#">Contact</a></li>
    </ul>
  </div>
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