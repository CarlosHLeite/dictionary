import styled from "styled-components";

import Icon from "../../assets/icon-search.svg";
import { useGlobalContext } from "../../context/appContext";
import { useState } from "react";

const UserInput = () => {
  const [userInput, setUserInput] = useState("");
  const { setWord } = useGlobalContext();

  const handleChange = (e) => {
    e.preventDefault();
    setWord(userInput);
    setUserInput("");
  };

  return (
    <Container onSubmit={(e) => handleChange(e)}>
      <input
        type="text"
        placeholder="Search for any word…"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button>
        <img src={Icon} alt="Search Icon" />
      </button>
    </Container>
  );
};
export default UserInput;

const Container = styled.form`
  width: 90%;
  max-width: 1200px;
  margin-inline: auto;
  border-radius: 16px;
  display: flex;
  background-color: #1f1f1f;
  margin-top: 10px;

  input {
    width: 100%;
    border: none;
    border-radius: 16px;
    background-color: #1f1f1f;
    padding: 20px 16px 20px 30px;
    font-size: 18px;
  }

  *:focus {
    outline: none;
  }

  button {
    background-color: #1f1f1f;
    border: none;
    cursor: pointer;
    padding: 20px 30px 20px 30px;
    border-radius: 16px;
  }

  button:hover {
    border: none;
  }
`;
