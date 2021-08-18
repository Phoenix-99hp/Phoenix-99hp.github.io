import GlobalContext from "./src/contexts/GlobalContext"
import React from "react"
import PageWrapper from "./src/components/PageWrapper/PageWrapper"

export const wrapPageElement = ({ element }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <PageWrapper>{element}</PageWrapper>
}

// export const onInitialClientRender = () => {
//   window.addEventListener(
//     "popstate",
//     () => (window.location.href = window.location.href)
//   )
// }

export const wrapRootElement = GlobalContext
