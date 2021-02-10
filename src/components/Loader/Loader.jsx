import React, { useEffect, useReducer } from "react"
import {
  StyledLoader,
  PageContainer,
  StyledLoaderSpan,
  FadeContainer,
  LoaderContainer,
} from "./LoaderStyle"
// import { ThemeProvider } from "styled-components"
// import GlobalStyle from "../../theme/globalStyle"
// import Theme from "../../theme/theme"
// import "../../theme/globalFonts.css"
import "./Loader.module.css"

const Loader = ({ text, offset }) => {
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
    dispatch({ type: "SHOW_OPACITY" })
  }, [])
  return (
    <FadeContainer>
      <PageContainer opacity={state.opacity}>
        <LoaderContainer offset={offset}>
          <StyledLoader></StyledLoader>
          <StyledLoaderSpan>{text}</StyledLoaderSpan>
        </LoaderContainer>
      </PageContainer>
    </FadeContainer>
    // </ThemeProvider> */}
  )
}

export default Loader
