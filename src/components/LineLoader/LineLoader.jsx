import React, { useEffect, useReducer } from "react"
import {
  FadeContainer,
  PageContainer,
  LoaderContainer,
  Loader,
  // LoaderOuter,
} from "./LineLoaderStyle"

const LineLoader = () => {
  // const initialState = {
  //   opacity: 0,
  //   timeouts: [],
  // }

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW_OPACITY":
  //       return {
  //         ...state,
  //         opacity: 1,
  //       }
  //     default:
  //       return state
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, initialState)

  // const showOpacityHandler = () => {
  //   state.timeouts.push(
  //     setTimeout(() => {
  //       dispatch({ type: "SHOW_OPACITY" })
  //     }, 1000)
  //   )
  // }

  // const debounce = (func, time) => {
  //   const duration = time || 300
  //   let timer
  //   return event => {
  //     if (timer) clearTimeout(timer)
  //     timer = setTimeout(func, duration, event)
  //   }
  // }

  // useEffect(() => {

  // }, [])

  return (
    <FadeContainer>
      <PageContainer>
        {/* <LoaderOuter> */}
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
        {/* </LoaderOuter> */}
      </PageContainer>
    </FadeContainer>
  )
}

export default LineLoader
