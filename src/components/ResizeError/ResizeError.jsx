import React from "react"
import { StyledNavItem } from "./ResizeErrorStyle"
import { Link } from "gatsby"

const ResizeError = () => {
  return (
    <StyledNavItem>
      <span>
        You are here because you tried to resize your browser window while
        calculations were being made, or while an animation was in progress.
        Because the calculations and/or animations are based on screen
        dimensions, this might have made the page look bad, so I hid it from
        you.
      </span>
      <Link to="/">Try Again</Link>
    </StyledNavItem>
  )
}

export default ResizeError
