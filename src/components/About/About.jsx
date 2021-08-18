import React, { useState, useContext } from "react"
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
import { InitialLoadContext } from "../../contexts/GlobalContext"

const AboutSection = () => {
  const { initial } = useContext(InitialLoadContext)
  const [isVisible, setIsVisible] = useState(false)

  return (
    <SectionContainer>
      <AboutContainer>
        {initial ? (
          <StyledLazyLoad width={200} height={178} isVisible={true}>
            <img src={myPicture} />
          </StyledLazyLoad>
        ) : (
          <StyledLazyLoad width={200} height={178} isVisible={isVisible}>
            <img src={myPicture} onLoad={() => setIsVisible(true)} />
          </StyledLazyLoad>
        )}
        <AboutCopyContainer>
          <AboutCopy>
            <p>
              Hi, I'm Drake McGarrah. I am a full-stack web developer primarily
              experienced with the MERN (MongoDB, Express, React, Node.js)
              stack.
            </p>
            <p>
              For me, it is not enough to just have a website work good enough -
              I like to understand what happens "under the hood" and am
              constantly looking for ways to customize and optimize websites.
              When starting a project, I seek to limit dependencies in order to
              improve site stability, security, and performance.
            </p>
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
            CSS/SCSS<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            JavaScript/JSX/jQuery<StyledCheck>&#x2705;</StyledCheck>
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
            MySQL<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            MongoDB<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            Mongoose<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            JWT<StyledCheck>&#x2705;</StyledCheck>
          </li>
          <li>
            Webpack<StyledCheck>&#x2705;</StyledCheck>
          </li>
          {/* <li>
            GraphQL
            <StyledYellow />
            
          </li>
          <li>
            Redux
            <StyledYellow />
            
          </li>
          <li>
            SQL
            <StyledYellow />
            
          </li>
          <li>
            PHP
            <StyledYellow />
        
          </li>
          <li>
            Ruby on Rails
            <StyledYellow />
         
          </li> */}
        </ul>
        {/* <SpecsKey>
          <span>
            <div>&#x2705;</div>= Firm Grasp
          </span>
          <span>
            <StyledBox />= Some Experience
          </span>
        </SpecsKey> */}
      </Technical>
    </SectionContainer>
  )
}

export default AboutSection
