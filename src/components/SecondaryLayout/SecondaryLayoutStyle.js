import styled, { css } from "styled-components";

export const PageContainer = styled.div`
    opacity: 0;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    display: flex;
    flex-flow: column;
    height: 100%;
    background-color: #070707;
    transition: all 500ms ease-in-out;
    ${props => props.opacity && css`
      opacity: 1;
    `}
  `;

export const MainContent = styled.main`
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    padding-bottom: 80px;
    @media screen and (max-width: 600px) {
      padding-bottom: 40px;
  }
    `;