import styled from 'styled-components';
import { upperCaseFirstLetter } from '../../../utilities/upperCaseFirstLetter';
import { completarNumeroConCeros } from '../../../utilities/completarNumeroConCeros';
import TypeContainer from '../../types/typeContainer/typeContainer';
import useGetPokemonById from '../../../hooks/useGetPokemonById/useGetPokemonById';

const DivCardPokemon = styled.div `
  width: 20rem;
  height: 20rem;
  border: 1px solid #f2f2f2;
  background: #ffffff;
  box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.08);
  border-radius: 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
`
const ImgPokemon = styled.img `
  width: 100%;
  height: 70%;
  border-radius: 10px;
`

const H3 = styled.h3 `
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
`

const Texto = styled.p `
  font-size: 0.9rem;
`


const CardPokemon = ({id}) => {
  const {Pokemon} = useGetPokemonById({id})

  return Pokemon &&
      <DivCardPokemon className='CardPokemon'>
        <ImgPokemon src={Pokemon.image} alt={Pokemon.name}/>
        <H3>{upperCaseFirstLetter(Pokemon.name)}</H3>
        <Texto>
          N°: {completarNumeroConCeros(Pokemon.id)} <br/>
        </Texto>
        <TypeContainer types={Pokemon.types}/>
      </DivCardPokemon>    

    
}

export default CardPokemon
