import styled from 'styled-components';
import Logo from '../logo/logo';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 12px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 90%; /* Ancho máximo para el ejemplo */
  height: 5rem; /* Altura fija para el navbar */
  margin: 20px auto; /* Centrado en la página */
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: space-between;

`;

const NavContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;  
  `;

const Ul = styled.ul`
  width: 100%;
  display : flex;
  justify-content: space-evenly;
  
  
`;

const Li = styled.li`
  list-style: none;

`;

const Navbar = () => {
  return (
    <HeaderContainer>
      <Logo/>
      <NavContainer>
        <Ul>
          <Li id='Home'>
            Home
          </Li>
          <Li id='About'>
            About
          </Li>
          <Li id='Work'>
            Work
          </Li>
          <Li id='Blog'>
            Blog
          </Li>
        </Ul>
      </NavContainer>
    </HeaderContainer>

  )
}

export default Navbar
