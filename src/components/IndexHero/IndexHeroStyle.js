import styled from "styled-components"

export const StyledHero = styled.h1`
  color: white;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;

  position: relative;

  > span {
    margin-bottom: 80px;
    border-radius: 10px;
    z-index: 100;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #070707;
    padding: 20px;
    border: 4px solid #2bf5e9;
    // yellow "#DFF959",
    // pink "#F834BB",
    // blue "#2BF5E9",
    // pink "#D831D7"
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

    // > h1 {
    //     width: fit-content;
    //     margin: 0 auto;
    // }

    // > span:last-of-type {
    //     font-size: 20px;
    // }
  }
`
