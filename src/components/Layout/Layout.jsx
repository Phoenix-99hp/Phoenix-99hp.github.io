import React, { useEffect, useReducer } from "react"
import { MainContent, PageContainer, FadeContainer } from "./LayoutStyle"
// import Theme from "../../theme/theme"
// import { ThemeProvider } from "styled-components"
// import GlobalStyle from "../../theme/globalStyle"
import Nav from "../Nav/Nav"
import "./Layout.module.css"
// import "../../theme/globalFonts.css"

const Layout = ({ children }) => {
  const initialState = {
    opacity: 0,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW_OPACITY":
        return {
          ...state,
          opacity: 1,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "SHOW_OPACITY" })
    }, 500)
  }, [])

  return (
    // <ThemeProvider theme={Theme}>
    // <GlobalStyle />
    <FadeContainer>
      <PageContainer opacity={state.opacity}>
        <MainContent>{children}</MainContent>
        <Nav />
      </PageContainer>
    </FadeContainer>
    // </ThemeProvider>
  )
}

export default Layout
