import styled, { css, keyframes } from "styled-components"

const fadeIn = keyframes`
0%{ opacity: 0;

}

100%{
opacity: 1;
}`

export const PageContainer = styled.div`
  opacity: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  flex-flow: column;
  height: 100%;
  // transition: all 500ms ease-in-out;

  ${({ opacity }) =>
    opacity === "show" &&
    css`
      animation: ${fadeIn} 1s ease-in;
      opacity: 1;
    `}
`

export const FadeContainer = styled.div`
  opacity: 1;
  background-color: #070707;
  // display: flex;
  // flex-flow: column;
  min-height: 100vh;
  // height: 100%;
  // text-align: center;
  width: 100vw;
  // align-items: center;
`

export const MainContent = styled.main`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;
  @media screen and (max-width: 600px) {
    padding-bottom: 40px;
  }
`
