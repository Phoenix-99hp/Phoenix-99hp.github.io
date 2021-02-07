import React, { useState, useEffect } from "react"
import {
  MainContent,
  PageContainer,
  FadeContainer,
} from "./SecondaryLayoutStyle"
import Theme from "../../theme/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../../theme/globalStyle"
import Nav from "../Nav/Nav"
import "../../theme/globalFonts.css"

const SecondaryLayout = ({ children }) => {
  //   const [opacity, setOpacity] = useState("hide")

  //   useEffect(() => {
  //     setOpacity("show")
  //   }, [])

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <FadeContainer>
        <PageContainer opacity={"show"}>
          <MainContent>{children}</MainContent>
          <Nav />
        </PageContainer>
      </FadeContainer>
    </ThemeProvider>
  )
}

export default SecondaryLayout
