import { nominalTypeHack } from "prop-types"
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
    // width: ${({ maxW }) => (maxW === 100 ? "100%" : "80%")};
    // width: 100%;

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
  cursor: pointer;
  border-radius: 3px;
  border: 2px solid #dff959;
  font-size: 25px;
  font-family: "Montserrat";
  outline: none;
  box-shadow: none;
  // background-image: none;

  // &:nth-of-type(2) {
  //   border-color: #2bf5e9;
  // }

  // &:nth-of-type(3) {
  //   border-color: #f834bb;
  // }

  ${props =>
    props.selected === true &&
    css`
      background-color: #dff959;
      color: black;
    `}

  @media screen and (max-width: 850px) {
    width: 100%;
    // margin: 10px 0;
  }

  @media (pointer: fine) {
    &:hover {
      background-color: #dff959;
      color: black;
    }
  }

  // @media (pointer: coarse) {
  //   &:hover {
  //     background: none;
  //     color: white;
  //   }
  // }

  @media screen and (orientation: landscape) {
    flex-wrap: nowrap;
    width: 150px;
  }
`
