import styled, {css} from "styled-components";

export const PageContainer = styled.div`
    opacity: 0;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    display: flex;
    flex-flow: column;
    height: 100%;
    max-height: 100vh;
    background-color: #070707;
    transition: all 500ms ease-in-out;
    ${props => props.opacity && css `
      opacity: 1;
    `}
  `;

export const MainContent = styled.main`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    position: relative;
    // max-height: calc(100vh - 80px);
    // max-width: 1350px;
    `;