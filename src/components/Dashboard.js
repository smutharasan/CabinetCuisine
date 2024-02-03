import React from 'react';
import '../index.css';

// Separate RestaurantCard component
const RestaurantCard = ({ name, cuisine, rating, deliveryTime, imageUrl }) => (
  <div className="restaurant-card">
    <img src={imageUrl} alt={name} />
    <div className="restaurant-details">
      <h3>{name}</h3>
      <p>Cuisine: {cuisine}</p>
      <p>Rating: {rating}</p>
      <p>Delivery Time: {deliveryTime} mins</p>
    </div>
  </div>
);

const Dashboard = () => {
  const restaurants = [
    {
      name: 'Sample Restaurant 1',
      cuisine: 'Italian',
      rating: 4.5,
      deliveryTime: 30,
      imageUrl: 'https://placekitten.com/200/300', // Replace with actual image URL
    },
    // Add more restaurant objects
  ];

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Welcome to PantryPal</h1>
        {/* Add navigation or other header components */}
      </header>
      <section className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </section>
      {/* Add other sections or components as needed */}
    </div>
  );
};

export default Dashboard;