import styled, { css } from "styled-components"

export const StyledNavContainer = styled.nav`
  //   height: 100px;
  //   padding-top: 20px;
  padding-bottom: 20px;
  height: fit-content;
  position: relative;
  width: 100%;
  bottom: 0;
  background: none;

  //   background-color: #070707;
  display: flex;
  justify-content: center;
  align-items: center;
  //   flex: 1 1 202px;
  @media screen and (max-width: 850px) {
    // position: relative;
    // height: 100%;
  }
`

export const StyledNavList = styled.ul`
  display: flex;
  width: 80%;
  max-width: 1100px;

  > a:first-of-type {
    margin-left: 0;
  }

  > a:last-of-type {
    margin-right: 0;
  }

  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 352px;
    // padding-bottom: 20px;
    // padding-top: 20px;

    > a:nth-of-type(2) {
      margin: 10px 0;
    }
  }

  @media screen and (max-width: 500px) {
    width: 260px;
  }

  @media screen and (max-width: 300px) {
    width: 231px;
  }

  > a {
    margin: 0 auto;
    text-decoration: none;
    z-index: 100;

    @media screen and (max-width: 850px) {
      flex: 1 1 100%;
      justify-content: center;
      //   max-width: 352px;
      //   width: 100%;
    }
  }

  @media screen and (orientation: landscape) {
    flex-wrap: nowrap;
    width: 80%;

    > a:nth-of-type(2) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`

export const StyledNavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  z-index: 100;
  margin: 0 auto;
  color: white;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid #f834bb;
  font-size: 25px;
  font-family: "Montserrat";
  outline: none;
  box-shadow: none;
  background-image: none;
  ${props =>
    props.selected === true &&
    css`
      background-color: #f834bb;
    `}
  @media screen and (max-width: 850px) {
    width: 100%;
    // margin: 10px 0;
  }

  &:hover {
    background-color: #f834bb;
  }

  @media (-moz-touch-enabled: 1), (pointer: coarse) {
    &:hover {
      ${props =>
        props.clicked === true &&
        css`
          background: none;
        `}
    }
  }

  @media screen and (orientation: landscape) {
    flex-wrap: nowrap;
    width: 150px;
  }
`
