import React from "react"
import {
  PortfolioContainer,
  Asterisk,
  StyledDisclaimerContainer,
  StyledDisclaimer,
  PortfolioProject,
  ProjectsTitle,
} from "./PortfolioSectionStyle"

const PortfolioSection = () => {
  return (
    <PortfolioContainer>
      <div>
        <ProjectsTitle>Sample Projects</ProjectsTitle>
        <StyledDisclaimerContainer>
          <StyledDisclaimer>
            * Some projects are deployed to Heroku using the free tier and may
            take some time to initially load.
          </StyledDisclaimer>
        </StyledDisclaimerContainer>
        <PortfolioProject>
          <h1>Battleship Game</h1>
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
        </PortfolioProject>
        <PortfolioProject>
          <h1>Clubhouse</h1>
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
        </PortfolioProject>
        <PortfolioProject>
          <h1>Inventory</h1>
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
        </PortfolioProject>
        <PortfolioProject>
          <h1>Matching Game</h1>
          <a
            href={"https://github.com/Phoenix-99hp/matching-game"}
            target="_blank"
            rel={"noopener noreferrer"}
          >
            <span>GitHub Code</span>
          </a>
          <a
            href={"https://phoenix-99hp.github.io/matching-game/"}
            target="_blank"
            rel={"noopener noreferrer"}
          >
            <span>Deployed</span>
          </a>
        </PortfolioProject>
        <PortfolioProject>
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
        </PortfolioProject>
        <PortfolioProject>
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
        </PortfolioProject>
      </div>
    </PortfolioContainer>
  )
}

export default PortfolioSection
