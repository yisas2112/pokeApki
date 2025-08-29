import styled from 'styled-components';
import Input from '../../components/inputs/input/input';
import { iconsMapping } from '../../components/icons/iconsMappging';
import { useEffect } from 'react';
import UserForm from '../../hooks/useForm/userForm';
import ContainerCards from '../../components/containerCards/containerCards';
import useGetPokemon from '../../hooks/useGetPokemon/useGetPokemon';

const SearchPokemonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Formulario = styled.form `
  width: 30%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchPokemon = () => {
  const {Pokemones} = useGetPokemon()
  const { handleChange, values } = UserForm({
    name:''
  });

  const onSubmit = (e)=>{
    e.preventDefault();
  }

  useEffect(() => {
    console.log(values)
    return () => {
      
    };
  }, [values]);

  return (
    <SearchPokemonContainer>
      <Formulario onSubmit={onSubmit}>
        <Input placeholder={'Nombre o número'} handleChange={handleChange} name={'name'}/>
        {iconsMapping['FaSearch']({"data-tooltip-id" : "tooltip",size:25, className:'icono-default', onClick:onSubmit})}
      </Formulario>
      <ContainerCards></ContainerCards>
    </SearchPokemonContainer>
  )
}

export default SearchPokemon
