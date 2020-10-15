import React, { useState, useEffect } from "react";
import { MainContent, PageContainer } from "./SecondaryLayoutStyle";
import Theme from "../../theme/theme";
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../../theme/globalStyle"
import Nav from "../Nav/Nav";

const SecondaryLayout = ({ children }) => {

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
                <Nav />
            </PageContainer>
        </ThemeProvider>
    )
}

export default SecondaryLayout