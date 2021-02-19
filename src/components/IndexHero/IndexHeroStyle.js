import styled from "styled-components"

export const StyledHero = styled.h1`
  color: white;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 80%;
  height: fit-content;

  > span {
    opacity: 0.7;

    border-radius: 3px;
    z-index: 100;

    background-color: white;
    color: black;
    padding: 20px;
    // border: 4px solid #2bf5e9;
    font-family: "Montserrat";
    font-weight: bold;

    @media screen and (max-width: 600px) {
      margin-bottom: 0;
    }

    @media screen and (max-width: 500px) {
      font-size: 70px;
    }

    @media screen and (max-width: 300px) {
      font-size: 60px;
    }

    @media screen and (max-height: 420px) {
      font-size: 70px;
    }

    @media screen and (max-height: 300px) {
      font-size: 60px;
    }
  }
`
