import styled from 'styled-components';
import Input from '../../components/inputs/input/input';
import { iconsMapping } from '../../components/icons/iconsMappging';
import { useEffect, useState } from 'react';
import UserForm from '../../hooks/useForm/userForm';

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

  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(e)
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
