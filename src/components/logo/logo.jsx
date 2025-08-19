import styled from "styled-components";


const LogoImg = styled.img`
  width: 7.5rem;
  z-index: 1;
`;

const Logo = ({className, onClick}) => {
  return (
      <LogoImg className={className} onClick={onClick} id="Logo" src="/src/assets/logo.png" alt="Logo" />
  )
}

export default Logo
