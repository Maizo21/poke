import React from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
  const [equipo, setEquipo] = React.useState([]);
  const [pokemon, setPokemon] = React.useState(null);
  const [msg, setMsg] = React.useState(null);

  const buscarPokemon = (e) => {
    e.preventDefault();
    let pokemonSearch = equipo.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
        mensaje("Resultado");
      })
      .catch((error) => {
        console.log(error);
        mensaje(`No se encontró el pokemon ${equipo}`);
      });
  };

  const mensaje = (mensaje) => {
    setMsg(mensaje);
  };

  return (
    <div>
      <h1>Pokedex</h1>

      <form onSubmit={buscarPokemon} className="row d-flex">
        <div className="col-sm-4 col-6 ">
          <input
            type="text"
            placeholder="pokemon"
            onChange={(e) => setEquipo(e.target.value)}
            required
            class="form-control"
          />
        </div>

        <button className="btn btn-primary col-4 col-sm-2">Search</button>
      </form>

      <hr />

      {pokemon && (
        <Link to={`/nosotros/${pokemon.name}`}>
          {pokemon && <p>{pokemon.name}</p>}
        </Link>
      )}

      <div>{msg}</div>
    </div>
  );
};

export default Nosotros;
