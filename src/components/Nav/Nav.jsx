import React, { useState } from "react"
import { StyledNavContainer, StyledNavItem, StyledNavList } from "./NavStyle"
import { Link } from "gatsby"
import Resume from "../../images/resume.pdf"

const Nav = () => {
  // const [clicked, setClicked] = useState(false)

  return (
    <StyledNavContainer>
      <StyledNavList>
        <Link to="/About">
          <StyledNavItem
            selected={
              typeof window !== "undefined" &&
              window.location.pathname.includes("/About")
                ? true
                : false
            }
            highlight={true}
          >
            About
          </StyledNavItem>
        </Link>
        <Link to="/Portfolio">
          <StyledNavItem
            selected={
              typeof window !== "undefined" &&
              window.location.pathname.includes("/Portfolio")
                ? true
                : false
            }
            highlight={true}
          >
            Portfolio
          </StyledNavItem>
        </Link>
        <a
          // onClick={() => setClicked(true)}
          href={Resume}
          target="_blank"
        >
          <StyledNavItem clicked={false} highlight={false}>
            Resume
          </StyledNavItem>
        </a>
      </StyledNavList>
    </StyledNavContainer>
  )
}

export default Nav
