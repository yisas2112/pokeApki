import styled from "styled-components";


const LogoImg = styled.img`
  width: 7.5rem;
  z-index: 1;
`;

const Logo = () => {
  return (
    <div id="Logo">
      <LogoImg src="/src/assets/logo.png" alt="Logo" />
    </div>
  )
}

export default Logo
