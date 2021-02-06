import React, { useReducer, useEffect } from "react"
import Layout from "../components/Layout/Layout"
import IndexHero from "../components/IndexHero/IndexHero"
import Code from "../components/Code/Code"
import Loader from "../components/Loader/Loader"
import { useMediaQuery } from "react-responsive"

const IndexPage = () => {
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
  const breakpoint = useMediaQuery({ query: "(max-width: 600px)" })

  useEffect(() => {
    dispatch({
      type: "CALCULATE_ROWS",
    })

    const height = breakpoint
      ? window.innerHeight - 222
      : window.innerHeight - 114
    const rows = Math.ceil(height / 20)
    const rowsArr = []

    for (let i = 0; i < rows; i++) {
      rowsArr.push(i)
    }
    setTimeout(() => {
      dispatch({
        type: "DONE_CALCULATING",
        payload: rowsArr,
      })
    }, 2000)
  }, [])

  return (
    <>
      {state.isCalculating ? (
        <Loader text={"MAKING CALCULATIONS..."} />
      ) : !state.hasError ? (
        <Layout>
          <IndexHero />
          <Code
            breakpoint={breakpoint}
            rowsNum={state.rowsNum}
            rowsArr={state.rowsArr}
          />
        </Layout>
      ) : null}
    </>
  )
}

export default IndexPage
