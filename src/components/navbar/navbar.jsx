import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '@components/logo/logo';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 12px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 90%; /* Ancho máximo para el ejemplo */
  min-height: 5rem; /* Altura fija para el navbar */
  margin: 20px auto; /* Centrado en la página */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: space-between;
  transform:skew(-25deg);

  #Logo{
    transform:skew(25deg);
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;  

`;

const Ul = styled.ul`
  width: 100%;
  display : flex;
  justify-content: space-evenly;

  .active{
    border-bottom: 2px solid tomato;
    border-radius: 7px 7px 0 0;
     
    a{
      position: relative;
      left: -6px;
    }
  }
  
`;

const Li = styled.li`
  list-style: none;
  text-decoration: none;
  font-size: 18px;
  font-weight:bolder;
  color:#555;
  transition:all 0.3s linear;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 7px;


  a{
    display:block;
    color:inherit;
    text-decoration:none;
    transform:skew(25deg);
  }
  &:hover{
    background:#eee;
    color: tomato;
  }

`;

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const navigate = useNavigate()
  const handleClick = (e) => {
    setActive(e?.target?.id || e);
  }

  const handleClicLogo = ()=>{
    setActive('Home')
    navigate('/')

  }
  return (
    <HeaderContainer id='HeaderContainer'>
      <Logo onClick={handleClicLogo}/>
      <NavContainer>
        <Ul>
          <Li className={active === 'Home' ? 'active' : ''}>
            <Link id='Home' to={'/'} onClick={handleClick}>
              Pokemon
            </Link>
          </Li>
        </Ul>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Navbar
