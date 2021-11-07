import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Pokemon from "./components/Pokemon";
function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group mt-5 gap-1">
          <Link to="/inicio" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Pokedex
          </Link>
          <NavLink
            to="/contacto"
            className="btn btn-dark"
            activeClassName="active"
          >
            Contacto
          </NavLink>
        </div>
        <hr />
        <Switch>
          <Route path="/nosotros/:name">
            <Pokemon />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
