import React from "react"
import {
  FadeContainer,
  PageContainer,
  LoaderContainer,
  Loader,
  // LoaderOuter,
} from "./LineLoaderStyle"
import { useMediaQuery } from "react-responsive"

const LineLoader = () => {
  return (
    <FadeContainer>
      <PageContainer>
        {/* <LoaderOuter> */}
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
        {/* </LoaderOuter> */}
      </PageContainer>
    </FadeContainer>
  )
}

export default LineLoader
