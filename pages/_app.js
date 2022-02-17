import * as React from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import "../styles/globalStyles.css";

let theme = createTheme({
  typography: {
    h5: {
      color: "white",
      fontWeight: 500,
      margin: 5,
    },
    subtitle1: {
      color: "white",
      fontWeight: 500,
    },
    subtitle2: {
      color: "white",
    }
  }
});

theme = responsiveFontSizes(theme);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
