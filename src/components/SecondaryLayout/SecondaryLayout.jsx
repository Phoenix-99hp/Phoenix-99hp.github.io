import React, { useEffect, useReducer } from "react"
import {
  MainContent,
  PageContainer,
  FadeContainer,
} from "./SecondaryLayoutStyle"
// import Theme from "../../theme/theme"
// import { ThemeProvider } from "styled-components"
// import GlobalStyle from "../../theme/globalStyle"
import Nav from "../Nav/Nav"
// import "../../theme/globalFonts.css"
import "./SecondaryLayout.module.css"

const SecondaryLayout = ({ children }) => {
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

  // useEffect(() => {
  //   // setTimeout(() => {
  //   dispatch({ type: "SHOW_OPACITY" })
  //   // }, 500)
  // }, [])

  const showOpacityHandler = () => dispatch({ type: "SHOW_OPACITY" })

  useEffect(() => {
    if (document.readyState === "complete") {
      showOpacityHandler()
    } else {
      window.addEventListener("load", showOpacityHandler)
    }
    return () => document.removeEventListener("load", showOpacityHandler)
  }, [])

  return (
    // <ThemeProvider theme={Theme}>
    //   <GlobalStyle />
    <FadeContainer>
      <PageContainer opacity={state.opacity}>
        <MainContent>{children}</MainContent>
        <Nav />
      </PageContainer>
    </FadeContainer>
    // </ThemeProvider>
  )
}

export default SecondaryLayout
