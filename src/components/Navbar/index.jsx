import styled from "styled-components";

import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <div className="logo-container">
        <h1>Dictionary</h1>
        <p>Get word definitions</p>
      </div>
    </Container>
  );
};
export default Navbar;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-inline: auto;
  height: 10vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .logo-container {
    margin-left: 22px;
  }

  h1 {
    font-size: 32px;
    font-weight: 500;
    color: #757575;
    line-height: 1;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    color: #757575;
    line-height: 1.4;
  }

  img {
    height: 40px;
  }
`;
