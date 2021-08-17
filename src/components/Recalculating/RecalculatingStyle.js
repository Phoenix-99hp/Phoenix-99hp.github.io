import styled from "styled-components"

export const PageContainer = styled.div`
  background-color: #070707;
  display: flex;
  align-items: center;
  justify-content: center;
  // min-height: 100vh;
  flex-direction: column;
  display: flex;
  flex-flow: column;
  // height: 100%;
  height: 100vh;
  // max-height: 100vh;
`

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  > span {
    color: white;
    font-family: Montserrat;
  }

  @media screen and (max-width: 850px) {
    margin-bottom: 202px;
  }

  @media screen and (orientation: landscape) {
    margin-bottom: 74px;
  }
`
