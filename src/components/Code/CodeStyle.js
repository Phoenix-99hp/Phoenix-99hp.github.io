import styled, { css, keyframes } from "styled-components"

const revealTwo = keyframes`
  0% {
   left: 0;
  }
  
  100% {
    left: 100%;
  }`

const flashCursor = keyframes`
  0% {
   opacity: 1;
  }
  
  100% {
    opacity: 0;
  }`

const slideDown = keyframes`
  0% {
   top: 0;
  }


  100% {
  top: 100vh;
  }`

export const BackgroundContainer = styled.code`
  // border: 3px solid orange;
  // margin-top: 20px;
  // margin-bottom: 20px;
  // padding-bottom: 20px;
  // border: 2px solid yellow;
  // background-color: yellow;
  max-height: calc(100vh - 114px);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  // top: 50%;
  // translateY(-50%);
  // z-index: 1;
  right: initial;
  max-width: 1100px;
  // background-color: #070707;
  background: none;
  word-break: break-all;
  font-size: 20px;
  color: #5ad632;
  overflow: hidden;
  opacity: 1;
  transition: opacity 10s, height 10s, width 10s, top 10s;

  @media screen and (max-width: 850px) {
    max-height: calc(100vh - 222px);
  }

  @media screen and (orientation: landscape) {
    max-height: calc(100vh - 114px);
    // height: 100%;
  }

  ${({ shouldRotate }) =>
    shouldRotate &&
    css`
      animation: ${slideDown} 10s;
      opacity: 0;
      top: -100vh;
    `};
`
export const AnimatedCursor = styled.div`
  position: absolute;
  z-index: 10;
  background-color: #f834bb;
  top: 0;
  left: 0;
  width: 10px;
  height: 100%;
  animation-play-state: paused;
  display: none;

  ${({ shouldFlash }) =>
    shouldFlash &&
    css`
      display: inherit;
      animation: ${flashCursor} linear 0.5s infinite;
    `}
`

export const OuterContainer = styled.div`
  // border: 2px solid blue;
  max-width: 1100px;
  background: #070707;
  position: relative;
  max-height: calc(100vh - 114px);
  width: 80%;
  // background: none;
  @media screen and (max-width: 850px) {
    max-height: calc(100vh - 222px);
  }

  @media screen and (orientation: landscape) {
    max-height: calc(100vh - 114px);
    // height: 100%;
  }
`

export const GridContainer = styled.div`
  // transform: translateY(-50%);
  // top: 50%;
  // border: 2px solid yellow;
  // margin-top: 20px;
  // margin-bottom: 20px;
  // background-color: red;
  display: grid;
  color: #5ad632;
  // overflow: hidden;
  max-height: calc(100vh - 114px);
  height: 100%;
  grid-template-columns: auto;
  // position: absolute;
  // top: 0;
  width: 100%;
  max-width: 1100px;
  position: relative;
  background: none;

  ${({ rows }) =>
    rows &&
    css`
      grid-template-rows: repeat(${rows}, 20px);
    `};

  @media screen and (max-width: 850px) {
    max-height: calc(100vh - 222px);
  }

  @media screen and (orientation: landscape) {
    max-height: calc(100vh - 114px);
    // height: 100%;
  }
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
      animation: ${revealTwo} 0.5s linear;
    `};

  ${({ first }) =>
    first &&
    css`
      animation-delay: 3s;
    `};

  ${({ doneWriting }) =>
    doneWriting &&
    css`
      background: none;
    `};

  @media screen and (max-width: 850px) {
    animation-duration: 0.4s;
  }
`
