import styled, { keyframes } from "styled-components"

const move = keyframes`
  0% {
   left: 0;
  }
  
  50% {
    left: calc(100% - 150px)
  }

  100% {
    left: 0;
  }`

export const PageContainer = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  height: 100%;
  text-align: center;
  width: 100vw;
  align-items: center;
  justify-content: center;
  // position: realtive;
`

export const FadeContainer = styled.div`
  opacity: 1;
  display: flex;
  justify-content: center;
  background-color: #070707;
  //   flex-flow: column;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  //   justify-content: center;
  //   text-align: center;
  //   width: 100vw;
  //   align-items: center;
`

// export const LoaderOuter = styled.div`
//   display: flex;
//   flex: 1 1 auto;
//   align-items: center;
// `

export const LoaderContainer = styled.div`
  // width: 500px;
  // max-width: 1000px;
  max-width: 600px;
  width: 100%;
  height: 2px;
  // border: 2px solid red;
  position: relative;
  background-color: gray;
`

export const Loader = styled.div`
  width: 150px;
  height: 2px;
  background-color: #4ef542;
  position: absolute;
  left: 0;
  animation: ${move} 2s ease infinite;
`
