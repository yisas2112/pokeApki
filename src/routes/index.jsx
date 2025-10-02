import SearchPokemon from "@pages/searchPokemon/searchPokemon";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import PokemonDetailContainer from "@components/pokemon/pokemonDetailContainer/pokemonDetailContainer";

export const router = createBrowserRouter([
  {
    index: '/',
    element : <App/>,
    children : [
      {
        index: true,
        element: <SearchPokemon/>,
      },
      {
        path : "/pokemon/:id",
        element: <PokemonDetailContainer/>,
      }
    ]
  },
])