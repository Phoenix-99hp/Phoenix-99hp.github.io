import React, { useReducer } from "react"
import Layout from "../components/Layout/Layout"
import AboutSection from "../components/About/About"
import SecondaryLayout from "../components/SecondaryLayout/SecondaryLayout"

const About = () => {
  // const initialState = {
  //   opacity: 0,
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

  return (
    <SecondaryLayout>
      <AboutSection />
    </SecondaryLayout>
  )
}

export default About
