/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// require("./src/theme/prismTheme.css")

import GlobalContext from "./src/contexts/GlobalContext"

// export const onInitialClientRender = () => {
//   window.addEventListener(
//     "popstate",
//     () => (window.location.href = window.location.href)
//   )
// }

export const wrapRootElement = GlobalContext
