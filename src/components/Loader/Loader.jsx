import React from "react"
import {
  StyledLoader,
  PageContainer,
  StyledLoaderSpan,
  FadeContainer,
  LoaderContainer,
} from "./LoaderStyle"
// import { ThemeProvider } from "styled-components"
// import GlobalStyle from "../../theme/globalStyle"
// import Theme from "../../theme/theme"
import "../../theme/globalFonts.css"
import "./Loader.module.css"

const Loader = ({ text, offset }) => {
  return (
    // <ThemeProvider theme={Theme}>
    //   <GlobalStyle />
    <FadeContainer>
      <PageContainer opacity={"show"}>
        <LoaderContainer offset={offset}>
          <StyledLoader></StyledLoader>
          <StyledLoaderSpan>{text}</StyledLoaderSpan>
        </LoaderContainer>
      </PageContainer>
    </FadeContainer>
    // </ThemeProvider> */}
  )
}

export default Loader
