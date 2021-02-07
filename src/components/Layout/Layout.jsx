import React from "react"
import { MainContent, PageContainer, FadeContainer } from "./LayoutStyle"
import Theme from "../../theme/theme"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../../theme/globalStyle"
import Nav from "../Nav/Nav"
import "../../theme/globalFonts.css"

const Layout = ({ children, navSpace }) => {
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

export default Layout
