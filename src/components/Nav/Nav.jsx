import React, { useState } from "react"
import { StyledNavContainer, StyledNavItem, StyledNavList } from "./NavStyle"
import { Link } from "gatsby"
import Resume from "../../images/resume.pdf"

const Nav = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <StyledNavContainer>
      <StyledNavList>
        <Link to="/About">
          <StyledNavItem
            selected={
              typeof window !== "undefined" &&
              window.location.pathname !== "/" &&
              window.location.pathname.includes("/About")
                ? true
                : false
            }
          >
            About
          </StyledNavItem>
        </Link>
        <Link to="/Portfolio">
          <StyledNavItem
            selected={
              typeof window !== "undefined" &&
              window.location.pathname !== "/" &&
              window.location.pathname.includes("/Portfolio")
                ? true
                : false
            }
          >
            Portfolio
          </StyledNavItem>
        </Link>
        <a onClick={() => setClicked(true)} href={Resume} target="_blank">
          <StyledNavItem clicked={clicked}>Resume</StyledNavItem>
        </a>
      </StyledNavList>
    </StyledNavContainer>
  )
}

export default Nav
