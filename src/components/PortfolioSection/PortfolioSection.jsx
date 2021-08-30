import React from "react"
import {
  PortfolioContainer,
  Asterisk,
  StyledDisclaimerContainer,
  StyledDisclaimer,
  PortfolioProjectContainer,
  PortfolioProject,
  ProjectsTitle,
  SubHeading,
  LinkContainer,
  Outer,
} from "./PortfolioSectionStyle"
import mcjIMG from "../../images/mc-j-tablet-mobile-carousel.png"

const PortfolioSection = () => {
  return (
    <Outer>
      <ProjectsTitle>Projects</ProjectsTitle>
      <PortfolioContainer>
        {/* <ProjectsTitle>Projects</ProjectsTitle> */}
        {/* <div> */}
        {/* <ProjectsTitle>Projects</ProjectsTitle> */}
        {/* <StyledDisclaimerContainer> */}
        {/* <StyledDisclaimer>
            * = Deployed to Heroku using the free tier (may take some time to
            initially load).
          </StyledDisclaimer> */}
        {/* </StyledDisclaimerContainer> */}
        <PortfolioProjectContainer>
          <PortfolioProject>
            <h1>Battleship Game</h1>
            <LinkContainer>
              <a
                href={"https://github.com/Phoenix-99hp/Battleship-Game"}
                target="_blank"
                rel={"noopener noreferrer"}
              >
                <span>GitHub Code</span>
              </a>
              <a
                href={"https://phoenix-99hp.github.io/Battleship-Game/"}
                target="_blank"
                rel={"noopener noreferrer"}
              >
                <span>Deployed</span>
              </a>
            </LinkContainer>
            <h4>Skills Demonstrated:</h4>
            <ul>
              <li>Complex front-end logic</li>
              <li>Vanilla JS</li>
              <li>Webpack</li>
            </ul>
          </PortfolioProject>
          {/* <PortfolioProject>
            <h1>Blog</h1>
            <a
              href={"https://github.com/Phoenix-99hp/contentful-blog"}
              target="_blank"
              rel={"noopener noreferrer"}
            >
              <span>GitHub Code</span>
            </a>
            <a
              href={"https://calm-mountain-77192.herokuapp.com/"}
              target="_blank"
              rel={"noopener noreferrer"}
            >
              <Asterisk>*</Asterisk> <span>Deployed</span>
            </a>
            <h4>Skills Demonstrated:</h4>
            <ul>
              <li>Contentful CMS integration</li>
              <li>Sliding carousel</li>
              <li>Dropdown menu</li>
              <li>React</li>
              <li>Node JS</li>
              <li>Express</li>
              <li>Webpack</li>
            </ul>
          </PortfolioProject> */}
          {/* <PortfolioProject>
            <h1>Clubhouse</h1>
            <LinkContainer>
            <a
              href={"https://github.com/Phoenix-99hp/gatsby-clubhouse"}
              target="_blank"
              rel={"noopener noreferrer"}
            >
              <span>GitHub Code</span>
            </a>
            <a
              href={"https://salty-sierra-48384.herokuapp.com/"}
              target="_blank"
              rel={"noopener noreferrer"}
            >
              <Asterisk>*</Asterisk> <span>Deployed</span>
              </a>
              </LinkContainer>
            <h4>Skills Demonstrated:</h4>
            <ul>
              <li>User Authentication</li>
              <li>Session Storage</li>
              <li>Gatsby JS</li>
              <li>Node JS</li>
              <li>Express</li>
            </ul>
          </PortfolioProject> */}
          {/* <PortfolioProject>
            <h1>Inventory</h1>
            <LinkContainer>
            <a
              href={"https://github.com/Phoenix-99hp/Inventory"}
              target="_blank"
              rel={"noopener noreferrer"}
            >
              <span>GitHub Code</span>
            </a>
            <a
              href={"https://secure-bayou-63938.herokuapp.com/"}
              target="_blank"
              rel={"noopener noreferrer"}
            >
              <Asterisk>*</Asterisk> <span>Deployed</span>
              </a>
              </LinkContainer>
            <h4>Skills Demonstrated:</h4>
            <ul>
              <li>Handlebars</li>
              <li>RegEx validation</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Node JS</li>
              <li>Express</li>
            </ul>
          </PortfolioProject> */}
          <PortfolioProject>
            <h1>Matching Game</h1>
            <LinkContainer>
              <a
                href={"https://github.com/Phoenix-99hp/matching-game"}
                target="_blank"
              >
                <span>GitHub Code</span>
              </a>
              <a
                href={"https://phoenix-99hp.github.io/matching-game/"}
                target="_blank"
              >
                <span>Deployed</span>
              </a>
            </LinkContainer>
            <h4>Skills Demonstrated:</h4>
            <ul>
              <li>React</li>
              <li>styled-components</li>
              <li>Front-end logic</li>
            </ul>
          </PortfolioProject>
          <PortfolioProject>
            <h1>Mc-J Carousel</h1>
            <SubHeading>(Tablet and Mobile Views)</SubHeading>
            <LinkContainer>
              <a
                href={"https://www.mcj.co"}
                target="_blank"
                rel={"noopener noreferrer"}
              >
                <span>Full site</span>
              </a>
              <a href={mcjIMG} target="_blank" rel={"noopener noreferrer"}>
                <span>Carousel</span>
              </a>
            </LinkContainer>
            <h4>Skills Demonstrated:</h4>
            <ul>
              <li>
                Ability to create isolated components consistent with the
                existing design framework of a site
              </li>
            </ul>
          </PortfolioProject>
          {/* <PortfolioProject>
            <h1>Odin-Book</h1>
            <a
              href={"https://github.com/Phoenix-99hp/odin-book-v2"}
              target="_blank"
              rel={"noopener noreferrer"}
            >
              <span>GitHub Code</span>
            </a>
            <a
              href={"https://phoenix-99hp.github.io/odin-book-v2/"}
              target="_blank"
              rel={"noopener noreferrer"}
            >
              <Asterisk>*</Asterisk> <span>Deployed</span>
            </a>
            <h4>Skills Demonstrated:</h4>
            <ul>
              <li>React</li>
              <li>User Authentication</li>
              <li>Session Storage</li>
              <li>CSS modules</li>
              <li>REST api</li>
              <li>Redux</li>
              <li>Complex back-end query execution</li>
              <li>Node JS</li>
              <li>Express</li>
            </ul>
          </PortfolioProject> */}
          {/* <PortfolioProject>
            <h1>Todo List</h1>
            <a
              href={"https://github.com/Phoenix-99hp/Todo-List"}
              target="_blank"
              rel={"noopener noreferrer"}
            >
              <span>GitHub Code</span>
            </a>
            <a
              href={"https://phoenix-99hp.github.io/Todo-List/"}
              target="_blank"
              rel={"noopener noreferrer"}
            >
              <span>Deployed</span>
            </a>
            <h4>Skills Demonstrated:</h4>
            <ul>
              <li>Capturing user input</li>
              <li>Local Storage</li>
            </ul>
          </PortfolioProject> */}
        </PortfolioProjectContainer>
        {/* </div> */}
      </PortfolioContainer>
    </Outer>
  )
}

export default PortfolioSection
