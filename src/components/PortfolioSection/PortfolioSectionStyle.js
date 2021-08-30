import styled from "styled-components"

export const Outer = styled.div`
  display: block;
  flex-wrap: wrap;
  // width: 100%;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`

export const PortfolioContainer = styled.div`
  // padding: 0 10px;
  max-width: 1100px;
  width: 100%;
  flex: 1 1 100%;
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
    // align-self: flex-start;
    width: 100%;
    // flex: 1 1 100%;
    text-align: center;
  }
`

export const PortfolioProjectContainer = styled.div`
  display: flex;
  // grid-template: repeat(1, minmax(300px, 1fr)) / repeat(3, minmax(300px, 1fr));
  // grid-gap: 15px 15px;
  justify-content: space-between;
  margin: 0 auto;

  // @media screen and (max-width: 1200px) {
  //   grid-template: repeat(3, minmax(300px, 1fr)) / repeat(
  //       2,
  //       minmax(300px, 300px)
  //     );
  //   justify-content: space-evenly;
  // }

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template: repeat(3, minmax(300px, 1fr)) / repeat(1, minmax(200px, 1fr));
    grid-gap: 15px 15px;
    // justify-content: center;
  }
`

export const PortfolioProject = styled.div`
  box-sizing: border-box;
  color: white;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 300px;
  width: 100%;
  border: 2px solid white;
  // margin: 0 auto;
  text-align: center;
  padding: 20px;
  // margin: 10px;
  border-radius: 10px;
  flex: 1 1 100%;

  // &:last-of-type {
  //   margin-right: 0;
  // }

  // &:first-of-type {
  //   margin-left: 0;
  // }

  > h4 {
    flex: 1 1 100%;
    color: #dff959;
    padding-bottom: 10px;
  }

  > ul {
    width: 100%;
    list-style-type: circle;
    text-align: left;
    margin-left: 20px;
    margin-rigth: 20px;
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

  @media screen and (max-width: 1200px) {
    margin: 0 auto !important;
  }

  @media screen and (max-width: 330px) {
    box-sizing: border-box;
    width: 250px;
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

  @media screen and (max-width: 1200px) {
    margin-top: 80px;
  }

  @media screen and (max-width: 430px) {
    font-size: 40px;
  }
`

export const StyledDisclaimerContainer = styled.div`
  // max-width: 300px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 0 20px;
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

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  }

  > a:first-of-type {
    padding: 10px 0;
  }

  > a:nth-of-type(2) {
    padding: 0 0 10px;
  }
`
