export const filterPokemonByName = (pokemons, name) => {
  if (!name) return pokemons;
  return pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(name.toLowerCase()) || 
    pokemon.id.includes(name)
  );
}