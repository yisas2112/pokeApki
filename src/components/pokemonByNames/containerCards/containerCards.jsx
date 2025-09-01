import styled from 'styled-components'
import CardPokemon from '../carPokemon/cardPokemon'

const ContainerDiv = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 10%;
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
