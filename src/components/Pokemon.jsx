import React from "react";
import { useParams } from "react-router";

const Pokemon = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = React.useState(null);

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  };

  let divStyle = {};
  let color = [];

  const getColor = function (type) {
    switch (type) {
      case "normal":
        return "#A8A878";
      case "fighting":
        return "#C03028";
      case "flying":
        return "#A890F0";
      case "poison":
        return "#A040A0";
      case "ground":
        return "#E0C068";
      case "rock":
        return "#B8A038";
      case "bug":
        return "#A8B820";
      case "ghost":
        return "#705898";
      case "steel":
        return "#B8B8D0";
      case "fire":
        return "#F08030";
      case "water":
        return "#6890F0";
      case "grass":
        return "#78C850";
      case "electric":
        return "#F8D030";
      case "psychic":
        return "#F85888";
      case "ice":
        return "#98D8D8";
      case "dragon":
        return "#7038F8";
      case "dark":
        return "#705848";
      case "fairy":
        return "#EE99AC";
      default:
        return "#000000";
    }
  };

  const getColorGradient = function (type) {
    if (pokemon.types.length > 1) {
      for (let index = 0; index < pokemon.types.length; index++) {
        color.push(getColor(pokemon.types[index].type.name));
      }

      divStyle = {
        background:
          "linear-gradient(180deg, " + color.join(", ").toLowerCase() + ")",
      };
    } else {
      color.push(getColor(pokemon.types[0].type.name));

      divStyle = {
        background: color,
      };
    }

    console.log(divStyle);
  };

  return (
    <>
      {pokemon && (
        <div
          onLoad={getColorGradient()}
          style={divStyle}
          className="pokemon card card-body d-flex text-center text-white shadow-lg rounded col-sm-4 col-8"
        >
          <div>
            <img src={pokemon.sprites.back_default} />
            <img src={pokemon.sprites.front_default} />
          </div>
          <h3 className="fw-bold">{pokemon.name}</h3>

          <div className="d-flex gap-2 justify-content-center">
            {pokemon.types.map((type) => (
              <p key={type.type.name}>{type.type.name}</p>
            ))}
          </div>

          <p>Pokemon #{pokemon.id}</p>
        </div>
      )}
    </>
  );
};

export default Pokemon;
