
export const searchPokemonAdapter = (datos) => {
  return datos.data.results.map((pokemon, key) => {
    return {
    id : pokemon.url.split('/')[6],
    name : pokemon.name,
    url : pokemon.url
    } 
  })
}

