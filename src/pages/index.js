import React, { useReducer, useEffect, useContext } from "react"
import Layout from "../components/Layout/Layout"
import IndexHero from "../components/IndexHero/IndexHero"
import Code from "../components/Code/Code"
import { AnimationContext } from "../contexts/GlobalContext"

const IndexPage = () => {
  const { showAnimation } = useContext(AnimationContext)
  const initialState = {
    rowsNum: null,
    rowsArr: [],
    isCalculating: true,
    hasError: false,
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case "CALCULATE_ROWS":
        return {
          ...state,
          isCalculating: true,
          hasError: false,
        }
      case "DONE_CALCULATING":
        return {
          ...state,
          isCalculating: false,
          hasError: false,
          rowsNum: action.payload.length,
          rowsArr: action.payload,
        }
      case "CALCULATION_FAILURE":
        return {
          ...state,
          hasError: true,
          isCalculating: false,
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  // const breakpoint = useMediaQuery({ query: "(max-width: 850px)" })
  // // const breakpoint = window.innerWidth > 850 ? false : true
  // const landscape = useMediaQuery({ query: "(orientation: landscape)" })

  const calculateRows = () => {
    const breakpoint = window.innerWidth > 850 ? false : true
    const landscape = window.matchMedia("(orientation: landscape)").matches
      ? true
      : false
    dispatch({
      type: "CALCULATE_ROWS",
    })

    const height = landscape
      ? window.innerHeight - 114
      : window.innerHeight > 1000 && !breakpoint
      ? 1000 - 114
      : window.innerHeight > 1000 && breakpoint
      ? 1000 - 242
      : breakpoint
      ? window.innerHeight - 242
      : window.innerHeight - 114
    const rows = Math.floor(height / 20)
    const rowsArr = []

    for (let i = 0; i < rows; i++) {
      rowsArr.push(i)
    }
    dispatch({
      type: "DONE_CALCULATING",
      payload: rowsArr,
    })
  }

  // // Function with stuff to execute
  // function resizeContent() {
  //   // Do loads of stuff once window has resized
  //   console.log("resized")
  // }

  // // Eventlistener
  // window.addEventListener("resize", debounce(resizeContent, 150))

  // const debounce = (func, time) => {
  //   const duration = time || 200
  //   let timer
  //   return event => {
  //     if (timer) clearTimeout(timer)
  //     timer = setTimeout(func, duration, event)
  //   }
  // }

  useEffect(() => {
    if (showAnimation) {
      calculateRows()
      window.addEventListener("resize", calculateRows)
    }
    return () => window.removeEventListener("resize", calculateRows)
  }, [])

  return (
    <>
      {!state.hasError && !state.isCalculating ? (
        <Layout>
          <IndexHero />
          {showAnimation ? (
            <Code rowsNum={state.rowsNum} rowsArr={state.rowsArr} />
          ) : null}
        </Layout>
      ) : null}
    </>
  )
}

export default IndexPage
