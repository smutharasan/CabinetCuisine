import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact"; // Import your new component
import Search from "./components/Search"; // Import your new component
import Dashboard from "./components/Dashboard";
import ScrambledEggsRecipe from "./components/ScrambledEggsRecipe";

function App() {
  const value = "World";
  return (
    <Router>
      <Switch>
        {/* Define your routes here */}
        <Route path="/contact" component={Contact} />
        <Route path="/search" component={Search} />
        <Route path="/recipe/abc" component={ScrambledEggsRecipe} />
        {/* Add more routes as needed */}

        {/* Default route */}
        <Route path="/" exact>
          <div>Hello {value}</div>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
