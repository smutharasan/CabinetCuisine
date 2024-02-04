import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Search from "./Search";
import GoogleFontLoader from "react-google-font-loader";
import { Link } from "react-router-dom";
const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const params = useParams();
  const REACT_APP_FOOD_API_KEY = process.env.REACT_APP_FOOD_API_KEY;

  useEffect(() => {
    let isMounted = true;
    const fetchDetails = async () => {
      const resp = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${REACT_APP_FOOD_API_KEY}`
      );
      const data = await resp.json();
      return data;
    };

    fetchDetails().then((data) => {
      if (isMounted) setDetails(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.id, REACT_APP_FOOD_API_KEY]);

  return (
    <div className="flex-col">
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
      <Wrapper>
        <div>
          <h2>{details.title}</h2>
          <img src={details.image} alt={details.title} />
        </div>
        <Info>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          {activeTab === "ingredients" && (
            <ul>
              {details.extendedIngredients.map(({ id, original }) => (
                <li key={id}>{original}</li>
              ))}
            </ul>
          )}

          {activeTab === "instructions" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          )}
        </Info>
      </Wrapper>
      <Footer />
    </div>
  );
};

const Wrapper = styled.div`
  margin: 10rem inherit 5rem;
  display: flex;

  @media (max-width: 1068px) {
    flex-direction: column;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  p {
    margin: 1rem 0;
    font-size: 1.1rem;
    line-height: 1.8rem;

    &:first-child {
      margin-top: 2rem;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;

  @media (max-width: 1068px) {
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;

export default Recipe;
