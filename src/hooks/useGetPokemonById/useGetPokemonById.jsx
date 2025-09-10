import useQueryApi from '@hooks/useQueryApi/useQueryApi';
import { pokemonAdapter } from 'adapter/pokemon';
import { useEffect } from 'react';

const useGetPokemonById = ({id}) => {
  const {datosFormateados : Pokemon, refetch} = useQueryApi({
    queryKey : `getPokemon${id}`, 
    ruta : `pokemon/${id}`,
    method : 'get', 
    adapter : pokemonAdapter,
  })

  useEffect(() => {
    if(id){
      refetch();
    }
  }, [id]);
  return {Pokemon}
}

export default useGetPokemonById
