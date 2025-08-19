import styled from 'styled-components';
import Input from '../../components/inputs/input/input';

const SearchPokemonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Formulario = styled.form `

`;
const SearchPokemon = () => {

  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(e)
  }

  const handleChange = (e, name)=>{
    console.log(e,name)

  }
  return (
    <SearchPokemonContainer>
      <Formulario onSubmit={onSubmit}>
        <Input label={'Buscar Pokemon: '} handleChange={handleChange} name={'name'}/>
      </Formulario>
    </SearchPokemonContainer>
  )
}

export default SearchPokemon
