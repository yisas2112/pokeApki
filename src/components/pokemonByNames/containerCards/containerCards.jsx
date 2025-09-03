import styled from 'styled-components'
import CardPokemon from '../carPokemon/cardPokemon'

const ContainerDiv = styled.div`
  width: 90%;
  margin: 0 auto; /* Para centrar el contenedor principal */
  display: flex;
  flex-wrap: wrap;
  gap: 25px; 
  justify-content: space-around;
`

const ContainerCards = ({pokemons}) => {
  return (
    <ContainerDiv className='ContainerCards'>
      {pokemons && pokemons.map((pokemon) => {
        return <CardPokemon id={pokemon.id} key={pokemon.id}/>
      })}
    </ContainerDiv>
  )
}

export default ContainerCards
