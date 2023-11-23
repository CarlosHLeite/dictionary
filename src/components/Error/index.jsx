import styled from "styled-components";

const Error = () => {
  return (
    <Container>
      <h1>No Definitions Found</h1>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </Container>
  );
};
export default Error;

const Container = styled.div`
  width: 90%;
  height: 60vh;
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    max-width: 690px;
    color: #757575;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
    margin-top: 18px;
  }
`;
