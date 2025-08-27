import styled from 'styled-components';
import Input from '../../components/inputs/input/input';
import { iconsMapping } from '../../components/icons/iconsMappging';
import { useEffect } from 'react';
import UserForm from '../../hooks/useForm/userForm';
import useQueryApi from '../../hooks/useQueryApi/useQueryApi';
import { searchPokemonAdapter } from '../../adapter/pokemon';

const SearchPokemonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Formulario = styled.form `
  width: 30%;
  display: flex;
  align-items: center;
  gap: 10px;
`;


const SearchPokemon = () => {
  const { handleChange, values } = UserForm({
    name:''
  });
  const {data, status, isFetching, error, refetch} = useQueryApi({
    queryKey : 'getPokemon', 
    ruta : `pokemon/${values.name}`,
    method : 'get', 
    mensajeError : 'Pokemón no encontrado.',
    adapter : searchPokemonAdapter
  })



  const onSubmit = (e)=>{
    e.preventDefault();
    refetch()
  }

  useEffect(() => {
    console.log(values)
    return () => {
      
    };
  }, [values]);

  return (
    <SearchPokemonContainer>
      <Formulario onSubmit={onSubmit}>
        <Input placeholder={'Nombre'} handleChange={handleChange} name={'name'}/>
        {iconsMapping['FaSearch']({"data-tooltip-id" : "tooltip",size:25, className:'icono-default', onClick:onSubmit})}
      </Formulario>
    </SearchPokemonContainer>
  )
}

export default SearchPokemon
