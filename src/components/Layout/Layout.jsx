import React, { useState, useEffect } from "react"
import { MainContent, PageContainer, FadeContainer } from "./LayoutStyle"
import Theme from "../../theme/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../../theme/globalStyle"
import Nav from "../Nav/Nav"
import "../../theme/globalFonts.css"

const Layout = ({ children }) => {
  const [opacity, setOpacity] = useState("hide")

  useEffect(() => {
    setOpacity("show")
  }, [])

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <FadeContainer>
        <PageContainer opacity={opacity}>
          <MainContent>{children}</MainContent>
          <Nav extraPadding={true} />
        </PageContainer>
      </FadeContainer>
    </ThemeProvider>
  )
}

export default Layout
