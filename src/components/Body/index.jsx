import styled from "styled-components";
import { useGlobalContext } from "../../context/appContext";

import playIcon from "../../assets/icon-play.svg";
import ListItems from "../ListItems";
import Loader from "../Loader";
import Error from "../Error";

const Body = () => {
  const { wordData, loading, errors } = useGlobalContext();

  if (errors) {
    return <Error />;
  }

  if (wordData.length) {
    const { word, phonetic, phonetics, meanings } = wordData[0];

    const handlePlay = () => {
      document.getElementById("player").play();
    };

    return (
      <Container>
        <div className="header">
          <div className="header-container">
            <h1>{word}</h1>
            <p>{phonetic}</p>
          </div>

          <audio
            id="player"
            src={phonetics[0]?.audio}
            type="audio/mpeg"
          ></audio>
          {phonetics[0]?.audio && (
            <button onClick={handlePlay}>
              <img src={playIcon} alt="" />
            </button>
          )}
        </div>

        {meanings.map((element) => {
          return (
            <Section key={element.partOfSpeech}>
              <div className="title">
                <h2>{element.partOfSpeech}</h2>
                <div className="line"></div>
              </div>

              <div className="subtitle">
                <h3>Meaning</h3>
                <ListItems element={element} />
              </div>
            </Section>
          );
        })}
      </Container>
    );
  }

  return <Loader />;
};
export default Body;

const Section = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title h2 {
    color: #fff;
    font-size: 24px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
    margin-right: 30px;
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: #3a3a3a;
  }

  .subtitle h3 {
    margin-top: 40px;
    color: #757575;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-inline: auto;

  .header {
    display: flex;
    justify-content: space-between;
  }

  .header-container {
    margin: 3rem 0;
  }

  .header-container p {
    color: #a445ed;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  h1 {
    color: #fff;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
