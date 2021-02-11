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
    // margin-bottom: 80px;
    border-radius: 10px;
    z-index: 100;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translateY(-50%);
    background-color: #070707;
    padding: 20px;
    border: 4px solid #2bf5e9;
    font-family: "Montserrat";
    // max-width: 352px;

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
