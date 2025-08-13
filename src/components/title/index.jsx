import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 1.5rem;
  `
const Title = ({children}) => {
  return (
    <H1>
      {children}
    </H1>
  )
}

export default Title
