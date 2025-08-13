import styled from 'styled-components';
import Logo from '../logo/logo';
import Title from '../title';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 12px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 90%; /* Ancho máximo para el ejemplo */
  height: 5rem; /* Altura fija para el navbar */
  margin: 20px auto; /* Centrado en la página */
  display: flex;
  align-items: center;
  
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  `;



const Navbar = () => {
  return (
    <HeaderContainer>
      <Logo/>
      <NavContainer>
        <Title>Poke Api</Title>
      </NavContainer>
    </HeaderContainer>

  )
}

export default Navbar
