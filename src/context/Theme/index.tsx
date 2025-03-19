'use client';

import { GlobalStyles, ThemeProvider as MuiThemeProvider } from "@mui/material";
import theme from "./theme";
import styles from "./styles";


const ThemeProvider: React.FC<{ children?: React.ReactNode }> = props => {
    const { children } = props

    return <MuiThemeProvider theme={theme}>
        <GlobalStyles styles={styles} />
        {children}
    </MuiThemeProvider>
}

export default ThemeProvider