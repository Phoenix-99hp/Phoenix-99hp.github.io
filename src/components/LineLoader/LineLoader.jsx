import React from "react"
import {
  FadeContainer,
  PageContainer,
  LoaderContainer,
} from "../Layout/LayoutStyle"

const LineLoader = () => {
  return (
    <FadeContainer>
      <PageContainer opacity={state.opacity}>
        <LoaderContainer>hi</LoaderContainer>
      </PageContainer>
    </FadeContainer>
  )
}

export default LineLoader
