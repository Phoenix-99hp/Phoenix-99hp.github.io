import React, { useEffect, useLayoutEffect, useReducer } from "react"
import { MainContent, PageContainer, FadeContainer, Outer } from "./LayoutStyle"
// import Theme from "../../theme/theme"
// import { ThemeProvider } from "styled-components"
// import GlobalStyle from "../../theme/globalStyle"
import Nav from "../Nav/Nav"
import LineLoader from "../LineLoader/LineLoader"
import "./Layout.module.css"
// import "../../theme/globalFonts.css"

const Layout = ({ children }) => {
  const initialState = {
    view: "loader",
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

  const showOpacityHandler = () => {
    setTimeout(() => {
      dispatch({ type: "SHOW_OPACITY" })
    }, 1000)
  }

  useEffect(() => {
    if (document.readyState === "complete") {
      showOpacityHandler()
    } else {
      window.addEventListener("load", showOpacityHandler)
    }
    // return () => document.removeEventListener("load", showOpacityHandler)
  }, [])

  return (
    <Outer>
      {/* <LineLoader /> */}
      {state.opacity === 0 ? <LineLoader /> : null}
      <FadeContainer opacity={state.opacity}>
        <PageContainer>
          <MainContent>{children}</MainContent>
          <Nav />
        </PageContainer>
      </FadeContainer>
    </Outer>
  )
}

export default Layout
