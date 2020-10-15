import React, {useState, useEffect} from "react";
import { MainContent, PageContainer } from "./LayoutStyle";
import Theme from "../../theme/theme";
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../../theme/globalStyle"
import Nav from "../Nav/Nav";

const Layout = ({ children }) => {

  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    setOpacity(true);
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <PageContainer opacity={opacity}>
        <MainContent>
          {children}
        </MainContent>
        <Nav extraPadding={true} />
      </PageContainer>
    </ThemeProvider>
  )
}

export default Layout
