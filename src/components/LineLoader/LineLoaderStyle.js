export const PageContainer = styled.div`
  opacity: ${({ opacity }) => opacity};
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  height: 100%;
  text-align: center;
  width: 100vw;
  align-items: center;
  justify-content: center;
  transition: opacity 1s ease-in;
`

export const FadeContainer = styled.div`
  opacity: 1;
  display: flex;
  background-color: #070707;
  //   flex-flow: column;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  //   justify-content: center;
  //   text-align: center;
  //   width: 100vw;
  //   align-items: center;
`

export const LoaderContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid red;
`
