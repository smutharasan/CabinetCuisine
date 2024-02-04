import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
//import styled from "styled-components";
import Search from "./Search";
import Footer from "./Footer";

import GoogleFontLoader from "react-google-font-loader";
const REACT_APP_FOOD_API_KEY = process.env.REACT_APP_FOOD_API_KEY;

const RecipeCard = ({ id, name, cuisine, cookingTime, imageUrl }) => (
  <div className="recipe-card">
      <img src={imageUrl} alt={name} />
      <div className="recipe-details">
    <Link to={`/recipe/${id}`}>
        <h3 style={{ fontFamily: "Futura, sans-serif" }}>{name}</h3>
        <p>Cuisine: {cuisine}</p>
        <p>Cooking Time: {cookingTime} mins</p>
    </Link>
      </div>
  </div>
);
const Searched = () => {
  console.log("The environment key is : ", REACT_APP_FOOD_API_KEY);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const parmas = useParams();

  const getSearchedRecipes = async (search) => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${REACT_APP_FOOD_API_KEY}&query=${search}`
    );
    const data = await resp.json();

    console.log("The data is : ", data.results);
    return data.results;
  };

  useEffect(() => {
    let isMounted = true;
    getSearchedRecipes(parmas.search).then((data) => {
      if (isMounted) setSearchedRecipes(data);
    });

    return () => {
      isMounted = false;
    };
  }, [parmas.search]);

  return (
    <div className="flex-col ">
      <GoogleFontLoader
        fonts={[
          {
            font: "Futura",
            weights: [400, 700],
          },
        ]}
      />
      <div className="logo-container">
        <img
          src="https://github.com/smutharasan/PantryPal/blob/main/src/PantryPal.png?raw=true"
          alt="Logo"
          className="logo"
        />
      </div>
      <Search></Search>

      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li>
            <Link class="menu__item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link class="menu__item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link class="menu__item" to="/recipes">
              Recipes
            </Link>
          </li>
          <li>
            <Link class="menu__item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <section className="recipe-list">
        {searchedRecipes.map(({ title, id, image }) => (
            <RecipeCard key={id} id={id} name={title} cuisine={''} cookingTime={''} imageUrl={image} />
        ))}
      </section>
      <Footer></Footer>
    </div>
  );
};



// const Card = styled.div`
//   img {
//     width: min(500px, 100%);
//     border-radius: 2rem;
//   }
//   a {
//     text-decoration: none;
//   }
//   h4 {
//     text-align: center;
//     padding: 1rem;
//   }
// `;

export default Searched;
