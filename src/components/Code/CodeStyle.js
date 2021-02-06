import styled, { css, keyframes } from "styled-components"

const revealTwo = keyframes`
  0% {
   left: 0;
  }
  
  100% {
    left: 100%;
  }`

export const BackgroundContainer = styled.code`
  height: calc(100vh - 80px);
  width: 80%;
  position: absolute;
  top: 0;
  max-width: 1350px;
  background-color: #070707;
  word-break: break-all;
  font-size: 20px;
  color: #5ad632;
  overflow: hidden;
`

export const GridContainer = styled.div`
  display: grid;
  color: #5ad632;
  overflow: hidden;
  height: 100%;
  grid-template-columns: auto;
  position: absolute;
  top: 0;
  width: 80%;
  max-width: 1350px;

  ${({ rows }) =>
    rows &&
    css`
      grid-template-rows: repeat(${rows}, 20px);
    `};
`

export const GridItem = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  left: 0;
  color: #5ad632;
  position: relative;
`
export const AbsoluteDiv = styled.div`
  z-index: 9;
  background-color: #070707;
  top: 0;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ isWriting }) =>
    isWriting &&
    css`
      animation: ${revealTwo} 0.7s linear;
    `};

  ${({ first }) =>
    first &&
    css`
      animation-delay: 2s;
    `};

  ${({ doneWriting }) =>
    doneWriting &&
    css`
      background: none;
    `};

  @media screen and (max-width: 600px) {
    animation-duration: 0.4s;
  }
`
