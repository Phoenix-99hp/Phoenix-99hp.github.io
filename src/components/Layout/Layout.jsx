import React, { useEffect, useContext, useReducer } from "react"
import { MainContent, PageContainer, FadeContainer, Outer } from "./LayoutStyle"
import Nav from "../Nav/Nav"
import LineLoader from "../LineLoader/LineLoader"
import "./Layout.module.css"
import { AnimationContext } from "../../contexts/GlobalContext"

const Layout = ({ children }) => {
  const { show } = useContext(AnimationContext)
  const initialState = {
    opacity: show ? 0 : 1,
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
    // state.timeouts.push(
    setTimeout(() => {
      dispatch({ type: "SHOW_OPACITY" })
    }, 1000)
    // )
  }

  useEffect(() => {
    // showOpacityHandler()
    if (document.readyState === "complete") {
      showOpacityHandler()
    } else {
      window.addEventListener("load", showOpacityHandler)
    }
    return () => {
      window.removeEventListener("load", showOpacityHandler)
      // state.timeouts.forEach(t => clearTimeout(t))
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
