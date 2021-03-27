import styled from "styled-components"

export const PortfolioContainer = styled.div`
  padding: 0 10px;
  width: 100%;
  // min-height: calc(100vh - 80px);
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  font-family: "Montserrat";
  flex-wrap: wrap;
  // @media screen and (max-width: 850px) {
  //   padding-bottom: 0;
  // }

  > div {
    align-self: flex-start;
    width: 100%;
    flex: 1 1 100%;
    text-align: center;
  }
`

export const PortfolioProject = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 300px;
  width: 100%;
  border-bottom: 2px solid white;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  flex: 1 1 100%;

  &:nth-of-type(2) {
    padding-top: 0;
  }

  > a {
    flex: 1 1 100%;
    display: block;
    color: #f834bb;
    cursor: pointer;
    text-decoration: none;
    width: fit-content;
    margin: 0 auto;

    > span:hover {
      text-decoration: underline;
    }

    // > span {
    //     color: white;
    // }
  }

  > a:first-of-type {
    padding: 10px 0;
  }

  > a:nth-of-type(2) {
    padding: 0 0 10px;
  }

  > h4 {
    flex: 1 1 100%;
    color: #dff959;
    padding-bottom: 10px;
  }

  > ul {
    width: 100%;
    list-style-type: circle;
    text-align: left;
  }

  > ul > li {
    text-align: left;
    padding-bottom: 5px;

    :last-of-type {
      padding-bottom: 0;
    }
  }

  > h1 {
    flex: 1 1 100%;
    font-size: 30px;
    font-family: "Montserrat";
  }

  @media screen and (max-width: 500px) {
    box-sizing: border-box;
    // max-width: 260px;
  }
`

export const ProjectsTitle = styled.h1`
  width: fit-content;
  font-size: 50px;
  color: white;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 40px;
  font-weight: bold;
  padding-bottom: 5px;
  font-family: "Montserrat";
  // border-bottom: 3px solid #dff959;

  opacity: 0.7;
  border-radius: 3px;
  background-color: white;
  color: black;
  padding: 20px;
  font-family: "Montserrat";
  font-weight: bold;

  @media screen and (max-width: 430px) {
    font-size: 40px;
  }
`

export const StyledDisclaimerContainer = styled.div`
  // max-width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
`

export const StyledDisclaimer = styled.span`
  color: white;
  align-self: center;
  line-height: 22px;
`

export const Asterisk = styled.span`
  color: white;
  pointer-events: none;
  cursor: default;
`

export const SubHeading = styled.span`
  padding-top: 5px;
`
