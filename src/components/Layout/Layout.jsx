import React, { useEffect, useReducer } from "react"
import { MainContent, PageContainer, FadeContainer, Outer } from "./LayoutStyle"
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

  // window.addEventListener("load", () => {
  //   dispatch({ type: "SHOW_OPACITY" })
  // })

  const showOpacityHandler = () => dispatch({ type: "SHOW_OPACITY" })

  useEffect(() => {
    if (document.readyState === "complete") {
      console.log("comp")
      showOpacityHandler()
    } else {
      console.log("else")
      window.addEventListener("load", showOpacityHandler)
    }
    return () => document.removeEventListener("load", showOpacityHandler)
  }, [])

  return (
    // <ThemeProvider theme={Theme}>
    // <GlobalStyle />
    <Outer>
      <FadeContainer opacity={state.opacity}>
        <PageContainer>
          <MainContent>{children}</MainContent>
          <Nav />
        </PageContainer>
      </FadeContainer>
    </Outer>
    // </ThemeProvider>
  )
}

export default Layout
