import React, { useEffect } from "react"
import {
  FadeContainer,
  PageContainer,
  LoaderContainer,
  Loader,
  // LoaderOuter,
} from "./LineLoaderStyle"

const LineLoader = () => {
  // const debounce = (func, time) => {
  //   const duration = time || 300
  //   let timer
  //   return event => {
  //     if (timer) clearTimeout(timer)
  //     timer = setTimeout(func, duration, event)
  //   }
  // }

  // useEffect(() => {

  // }, [])

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
