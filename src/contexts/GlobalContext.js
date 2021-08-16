import React, { useState } from "react"
// import SearchContextProvider from "../SearchContext";
// import CartContextProvider from "../CartContext";

export const AnimationContext = React.createContext()

const GlobalContext = ({ children }) => {
  const [showAnimation, setShowAnimation] = useState(true)

  return (
    <AnimationContext.Provider
      value={{
        showAnimation: showAnimation,
        setShowAnimation: newData => setShowAnimation(newData),
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}

export default ({ element }) => <GlobalContext>{element}</GlobalContext>
