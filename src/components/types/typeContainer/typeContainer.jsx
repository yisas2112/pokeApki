import styled from "styled-components"
import TypesPokemon from "../typesPokemon/typesPokemon"
const DivTypeContainer = styled.div `
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

const TypeContainer = ({types}) => {
  return (
    <DivTypeContainer>
      {types && types.map((type) => {
        return <TypesPokemon idType={type} key={`type-${type}`}/>
      })}
    </DivTypeContainer>
  )
}

export default TypeContainer
