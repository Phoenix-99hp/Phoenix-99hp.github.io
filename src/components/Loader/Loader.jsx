import React, { useEffect, useState } from "react"
import {
  StyledLoader,
  PageContainer,
  StyledLoaderSpan,
  FadeContainer,
  LoaderContainer,
} from "./LoaderStyle"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../../theme/globalStyle"
import Theme from "../../theme/theme"

const Loader = ({ text, offset }) => {
  const [opacity, setOpacity] = useState("hide")

  useEffect(() => {
    setOpacity("show")
  }, [])

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <FadeContainer>
        <PageContainer opacity={opacity}>
          <LoaderContainer offset={offset}>
            <StyledLoader></StyledLoader>
            <StyledLoaderSpan>{text}</StyledLoaderSpan>
          </LoaderContainer>
        </PageContainer>
      </FadeContainer>
    </ThemeProvider>
  )
}

export default Loader
