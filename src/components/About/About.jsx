import React, { useState } from "react"
import myPicture from "../../images/real2.png"
import {
  SectionContainer,
  StyledBox,
  SpecsKey,
  Technical,
  AboutContainer,
  AboutCopyContainer,
  AboutCopy,
  StyledLazyLoad,
  StyledCheck,
  StyledYellow,
} from "./AboutStyle"

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <SectionContainer>
      <AboutContainer>
        <StyledLazyLoad width={200} height={178} isVisible={isVisible}>
          <img src={myPicture} onLoad={() => setIsVisible(true)} />
        </StyledLazyLoad>
        <AboutCopyContainer>
          <AboutCopy>
            Hi, I'm Drake McGarrah. I am a full-stack web developer primarily
            experienced with the MERN (MongoDB, Express, React, Node.js) stack.
            I enjoy taking people's designs and web page ideas and turning them
            into reality.
          </AboutCopy>
        </AboutCopyContainer>
      </AboutContainer>
      <Technical>
        <h1>Relevant Skills</h1>
        <ul>
          <li>
            HTML<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            CSS<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            JavaScript<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            React<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            Node.js<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            Express<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            MongoDB<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            GraphQL
            <StyledYellow />
            {/* <span>
              <div></div>
            </span> */}
          </li>
          <li>
            Redux
            <StyledYellow />
            {/* <span>
              <div></div>
            </span> */}
          </li>
          <li>
            SQL
            <StyledYellow />
            {/* <span>
              <div></div>
            </span> */}
          </li>
          <li>
            PHP
            <StyledYellow />
            {/* <span>
              <div></div>
            </span> */}
          </li>
          <li>
            Ruby on Rails
            <StyledYellow />
            {/* <span>
              <div></div>
            </span> */}
          </li>
        </ul>
        <SpecsKey>
          <span>
            <div>&#x2705;</div>= Firm Grasp
          </span>
          <span>
            <StyledBox />= Some Experience
          </span>
        </SpecsKey>
      </Technical>
    </SectionContainer>
  )
}

export default AboutSection
