import React from 'react'
import { searchPokemonAdapter } from '../../adapter/pokemon'
import useQueryApi from '../useQueryApi/useQueryApi'
import { useEffect } from 'react'

const useGetPokemon = () => {
  const {datosFormateados : Pokemones, refetch} = useQueryApi({
    queryKey : 'getPokemon', 
    ruta : `pokemon/?limit=1500`,
    method : 'get', 
    adapter : searchPokemonAdapter,
    
  })

  useEffect(() => {
    refetch()

  }, []);
  return {Pokemones}
}

export default useGetPokemon
