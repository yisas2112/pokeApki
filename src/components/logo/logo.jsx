import styled from "styled-components";


const LogoImg = styled.img`
  width: 7.5rem;
  z-index: 1;
`;

const Logo = ({className}) => {
  return (
      <LogoImg className={className} id="Logo" src="/src/assets/logo.png" alt="Logo" />
  )
}

export default Logo
