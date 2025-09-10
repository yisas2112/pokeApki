import { ContainerDiv } from '@styledComponents/divContainer'
import CardPokemon from '@components/pokemonByNames/carPokemon/cardPokemon'

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
