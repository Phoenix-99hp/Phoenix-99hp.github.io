import React, { useState } from "react"
// import SearchContextProvider from "../SearchContext";
// import CartContextProvider from "../CartContext";

export const AnimationContext = React.createContext()
export const InitialLoadContext = React.createContext()

const GlobalContext = ({ children }) => {
  const [showAnimation, setShowAnimation] = useState(true)
  const [initialLoad, setInitialLoad] = useState(true)

  return (
    <InitialLoadContext.Provider
      value={{
        initial: initialLoad,
        setInitial: newData => setInitialLoad(newData),
      }}
    >
      <AnimationContext.Provider
        value={{
          show: showAnimation,
          setShow: newData => setShowAnimation(newData),
        }}
      >
        {children}
      </AnimationContext.Provider>
    </InitialLoadContext.Provider>
  )
}

export default ({ element }) => <GlobalContext>{element}</GlobalContext>
