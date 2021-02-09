import styled, { css } from "styled-components"
import LazyLoad from "react-lazy-load"

export const SectionContainer = styled.div`
  display: flex;
  padding: 20px;
  font-family: "Montserrat";
  max-width: 1350px;
  @media screen and (max-width: 760px) {
    flex-wrap: wrap;
    padding-bottom: 0;
    padding-top: 40px;
  } ;
`

export const AboutContainer = styled.div`
  flex: 0 1 50%;
  @media screen and (max-width: 760px) {
    flex: 1 1 100%;
  }
`

export const AboutCopyContainer = styled.div`
  padding-top: 30px;
  width: 80%;
  max-width: 1350px;
  margin: 0 auto;
`

export const AboutCopy = styled.span`
  color: white;
  font-size: 25px;
  line-height: 40px;
`

export const StyledLazyLoad = styled(LazyLoad)`
  height: 178px;
  width: 200px;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  margin-right: 15px;

  > img {
    border-radius: 5px;
  }

  ${props =>
    props.isVisible &&
    css`
      filter: none;
      -webkit-filter: none;
    `}
`

export const Technical = styled.div`
  flex: 0 1 50%;
  color: white;
  align-self: center;
  // padding-bottom: 40px;
  font-weight: bold;
  @media screen and (max-width: 760px) {
    flex: 1 1 100%;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media screen and (max-width: 600px) {
    flex: 1 1 100%;
    padding-top: 40px;
    padding-bottom: 0;
  }

  > ul > li {
    font-size: 25px;
    padding-bottom: 15px;
    position: relative;
    font-weight: normal;
  }

  //   > ul > li > span {
  //     position: absolute;
  //     right: 0;
  //     top: 50%;
  //     transform: translateY(-50%);
  //   }

  //   > ul > li > div {
  //     position: absolute;
  //     right: 0;
  //     top: 50%;
  //     transform: translateY(-50%);
  //     height: 25px;
  //     width: 25px;
  //     border-radius: 5px;
  //     background-color: #fadd08;
  //   }

  > h1 {
    font-size: 50px;
    text-align: center;
    padding-bottom: 5px;
    margin: 0 auto;
    margin-bottom: 35px;
    border-bottom: 3px solid #dff959;
    width: fit-content;
    font-family: "Montserrat";
    @media screen and (max-width: 835px) {
      font-size: 40px;
    }
  }
`

export const StyledCheck = styled.div`
  display: flex;
  justify-content: center;
  height: 25px;
  width: 25px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`

export const StyledYellow = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 5px;
  background-color: #fadd08;
  height: 25px;
  width: 25px;
`

export const SpecsKey = styled.div`
  padding-top: 25px;
  // padding-bottom: 20px;
  display: inline-flex;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 385px) {
    display: flex;
    flex-wrap: wrap;
  }

  > span {
    display: inline-flex;
    padding: 0px 10px;
    @media screen and (max-width: 385px) {
      flex: 1 1 100%;
    }
  }

  > span > div {
    margin-right: 5px;
  }

  > span:nth-of-type(1) {
    @media screen and (max-width: 385px) {
      padding-bottom: 10px;
    }
  }
`

export const StyledBox = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 4px;
  background-color: #fadd08;
  margin-right: 5px;
`
