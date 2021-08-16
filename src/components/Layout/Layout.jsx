import React, { useEffect, useContext, useReducer } from "react"
import { MainContent, PageContainer, FadeContainer, Outer } from "./LayoutStyle"
// import Theme from "../../theme/theme"
// import { ThemeProvider } from "styled-components"
// import GlobalStyle from "../../theme/globalStyle"
import Nav from "../Nav/Nav"
import LineLoader from "../LineLoader/LineLoader"
import "./Layout.module.css"
import { AnimationContext } from "../../contexts/GlobalContext"
// import "../../theme/globalFonts.css"

const Layout = ({ children }) => {
  const { showAnimation } = useContext(AnimationContext)
  const initialState = {
    opacity: showAnimation ? 0 : 1,
    timeouts: [],
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
    // if (state.timeouts[0]) {
    //   state.timeouts.forEach(t => clearTimeout(t))
    // }
    state.timeouts.push(
      setTimeout(() => {
        dispatch({ type: "SHOW_OPACITY" })
      }, 1000)
    )
  }

  // const debounce = (func, time) => {
  //   const duration = time || 200
  //   let timer
  //   return event => {
  //     if (timer) clearTimeout(timer)
  //     timer = setTimeout(func, duration, event)
  //   }
  // }

  useEffect(() => {
    if (document.readyState === "complete") {
      showOpacityHandler()
    } else {
      window.addEventListener("load", showOpacityHandler)
    }
    return () => {
      window.removeEventListener("load", showOpacityHandler)
      state.timeouts.forEach(t => clearTimeout(t))
    }
  }, [])

  return (
    <Outer>
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
