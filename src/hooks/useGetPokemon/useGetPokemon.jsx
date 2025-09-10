import { searchAllPokemonAdapter } from '@adapter/pokemon';
import useQueryApi from '@hooks/useQueryApi/useQueryApi';
import { useEffect } from 'react'

const useGetPokemon = () => {
  const {datosFormateados : Pokemones, refetch} = useQueryApi({
    queryKey : 'getAllPokemon', 
    ruta : `pokemon/?limit=1500`,
    method : 'get', 
    adapter : searchAllPokemonAdapter,
  })

  useEffect(() => {
    refetch()
  }, []);
  
  return {Pokemones}
}

export default useGetPokemon
