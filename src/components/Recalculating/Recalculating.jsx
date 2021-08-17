import React from "react"
import { PageContainer, MessageContainer } from "./RecalculatingStyle"

const Recalculating = () => {
  return (
    <PageContainer>
      <MessageContainer>
        <span>Window resized. Recalculating dimensions...</span>
      </MessageContainer>
    </PageContainer>
  )
}

export default Recalculating
