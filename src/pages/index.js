import React, { useReducer, useEffect, useContext } from "react"
import Layout from "../components/Layout/Layout"
import IndexHero from "../components/IndexHero/IndexHero"
import Code from "../components/Code/Code"
import Recalculating from "../components/Recalculating/Recalculating"
import { AnimationContext } from "../contexts/GlobalContext"

const IndexPage = () => {
  // console.log("render")
  const { show } = useContext(AnimationContext)
  const initialState = {
    rowsNum: null,
    rowsArr: [],
    isCalculating: true,
    hasError: false,
    recalculate: true,
    timeouts: [],
    isRecalculating: false,
    // first: false,
  }
  const reducer = (state, action) => {
    switch (action.type) {
      // case "FIRST":
      //   return {
      //     ...state,
      //     first: false,
      //     // isCalculating: true,
      //   }
      case "CALCULATE_ROWS":
        return {
          ...state,
          isCalculating: true,
          hasError: false,
        }
      case "RECALCULATE_ROWS":
        return {
          ...state,
          isCalculating: true,
          hasError: false,
          isRecalculating: true,
        }
      case "DONE_CALCULATING":
        return {
          ...state,
          isCalculating: false,
          hasError: false,
          rowsNum: action.payload.length,
          rowsArr: action.payload,
          recalculate: true,
          isRecalculating: false,
          // initialLoad: false,
        }
      case "CALCULATION_FAILURE":
        return {
          ...state,
          hasError: true,
          isCalculating: false,
        }
      case "TOUCH":
        return {
          ...state,
          recalculate: false,
        }
      // case "RESET_RECALCULATE":
      //   return {
      //     ...state,
      //     recalculate: true,
      //   }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  // const breakpoint = useMediaQuery({ query: "(max-width: 850px)" })
  // // const breakpoint = window.innerWidth > 850 ? false : true
  // const landscape = useMediaQuery({ query: "(orientation: landscape)" })

  // const timeout = async () => {
  //   await state.timeouts.push(
  //     setTimeout(() => {
  //       dispatch({
  //         type: "CALCULATE_ROWS",
  //       })
  //     }, 2000)
  //   )
  // }

  // const delay = (t, v) => {
  //   return new Promise(function (resolve) {
  //     setTimeout(resolve.bind(null, v), t)
  //   })
  // }

  const delay = t => {
    state.timeouts.forEach(t => clearTimeout(t))
    dispatch({
      type: "RECALCULATE_ROWS",
    })
    return new Promise(function (resolve) {
      state.timeouts.push(
        setTimeout(() => {
          resolve(null)
        }, t)
      )
    })
  }

  const initialCalculation = () => {
    // console.log(touchResize)
    // if (first) {
    // console.log("initial")
    // dispatch({
    //   type: "FIRST",
    // })
    dispatch({
      type: "CALCULATE_ROWS",
    })
    const breakpoint = window.innerWidth > 850 ? false : true
    const landscape = window.matchMedia("(orientation: landscape)").matches
      ? true
      : false

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
    // console.log(first)
  }

  const calculateRows = () => {
    if (state.recalculate && show) {
      delay(1000).then(() => {
        // dispatch({
        //   type: "CALCULATE_ROWS",
        // })
        const breakpoint = window.innerWidth > 850 ? false : true
        const landscape = window.matchMedia("(orientation: landscape)").matches
          ? true
          : false

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
      })
    }

    // state.timeouts.push(
    //   setTimeout(() => {
    //     dispatch({
    //       type: "CALCULATE_ROWS",
    //     })
    //   }, 2000)
    // )
    // dispatch({
    //   type: "CALCULATE_ROWS",
    // })
    //   const breakpoint = window.innerWidth > 850 ? false : true
    //   const landscape = window.matchMedia("(orientation: landscape)").matches
    //     ? true
    //     : false

    //   const height = landscape
    //     ? window.innerHeight - 114
    //     : window.innerHeight > 1000 && !breakpoint
    //     ? 1000 - 114
    //     : window.innerHeight > 1000 && breakpoint
    //     ? 1000 - 242
    //     : breakpoint
    //     ? window.innerHeight - 242
    //     : window.innerHeight - 114
    //   const rows = Math.floor(height / 20)
    //   const rowsArr = []

    //   for (let i = 0; i < rows; i++) {
    //     rowsArr.push(i)
    //   }
    //   dispatch({
    //     type: "DONE_CALCULATING",
    //     payload: rowsArr,
    //   })
    // }
    // else {
    //   dispatch({ type: "RESET_RECALCULATE" })
    // }
  }

  // const isTouchEvent = () => {
  //   if (window.matchMedia("(pointer: coarse)").matches) {
  //     return true
  //   }
  //   return false
  // }

  const isTouchEvent = () => dispatch({ type: "TOUCH" })

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
    if (show) {
      window.addEventListener("touchstart", isTouchEvent)
      window.addEventListener("touchmove", isTouchEvent)
      window.addEventListener("resize", calculateRows)
      initialCalculation()
    }
    return () => {
      window.removeEventListener("resize", calculateRows)
      window.removeEventListener("touchstart", isTouchEvent)
      window.removeEventListener("touchmove", isTouchEvent)
      state.timeouts.forEach(t => clearTimeout(t))
    }
  }, [])

  return (
    <>
      {state.isRecalculating && state.recalculate && show ? (
        <Recalculating />
      ) : !state.hasError &&
        (!state.isCalculating || !show || !state.recalculate) ? (
        <Layout>
          <IndexHero />
          {show ? (
            <Code rowsNum={state.rowsNum} rowsArr={state.rowsArr} />
          ) : null}
        </Layout>
      ) : null}
    </>
  )
}

export default IndexPage
