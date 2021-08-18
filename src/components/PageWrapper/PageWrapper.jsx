import React, { useEffect, useReducer, useContext } from "react"
import { Wrapper } from "./PageWrapperStyle"
import LineLoader from "../LineLoader/LineLoader"
import { InitialLoadContext } from "../../contexts/GlobalContext"

const PageWrapper = ({ children }) => {
  const { initial, setInitial } = useContext(InitialLoadContext)

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

  const showOpacityHandler = () => {
    // console.log("HANDLER")
    setTimeout(() => {
      dispatch({ type: "SHOW_OPACITY" })
      setInitial(false)
    }, 1000)
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    window.addEventListener("load", showOpacityHandler)
  }, [])

  return (
    <Wrapper>
      {state.opacity === 0 ? <LineLoader /> : ""}
      {children}
    </Wrapper>
  )
}

export default PageWrapper
