export const searchAllPokemonAdapter = (datos) => {
  return datos.data.results.map((pokemon) => {
    return {
    id : pokemon.url.split('/')[6],
    name : pokemon.name,
    url : pokemon.url,
    } 
  })
}
export const pokemonAdapter = (datos) => {
  let pokemon = datos.data
  return {
    id : pokemon.id,
    name : pokemon.name,
    image : pokemon.sprites.other['official-artwork'].front_default,
    types : pokemon.types.map((typeInfo) => typeInfo.type.url.split('/')[6]),
  }
}

export const typePokemonAdapter = (datos) => {
  let tipos = datos.data
  return {
    tipo : tipos.names.filter((type) => type.language.name === 'es')[0].name,
  }
}

