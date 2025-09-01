import { useEffect } from "react"
import { typePokemonAdapter } from "../../../adapter/pokemon"
import styled from "styled-components"
import useQueryApi from "../../../hooks/useQueryApi/useQueryApi"
import { typeColors } from "../typeColors/typeColors"
import { mappginIconTypePokemon } from "../iconsTypePokemon"

const Span = styled.span`
  /* Usamos la prop directamente. Si no existe, el color es gris. */
  background-color: ${props => props.$bgColor || 'grey'};
  /* Otros estilos que necesites, como padding, color de texto, etc. */
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

const IconTypePokemon = styled.img `
  width: 1rem;

`

const TypesPokemon = ({idType}) => {
  const {datosFormateados: typesPokemon, refetch} = useQueryApi({
    queryKey : `typePokemon${idType}`, 
    ruta : `type/${idType}`,
    method : 'get', 
    adapter : typePokemonAdapter,
  })

  useEffect(() => {
    if(idType){
      refetch();
    }
  }, [idType]);

  // Esta variable ya contiene el valor del color, ej: '#A8A878'
  const colorDelTipo = typesPokemon ? typeColors[typesPokemon.tipo] : undefined;
  const iconTypPokemon = typesPokemon ? mappginIconTypePokemon[typesPokemon.tipo] : undefined;
  
  return (
    // Pasamos la prop con el prefijo $
    <Span $bgColor={colorDelTipo}>
      <IconTypePokemon src={iconTypPokemon}></IconTypePokemon>
      {typesPokemon && typesPokemon.tipo}
    </Span>
  )
}

export default TypesPokemon