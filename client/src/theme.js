import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Open Sans"].join(","),
  },
  palette: {
    primary: {
      light: "#95dfff",
      main: "#019ee0",
      dark: "#0d0e43",
      contrastText: "#fff",
    },
    secondary: {
      light: "#fece95",
      main: "#feac4d",
      dark: "#e87d01",
      contrastText: "#fff",
    },
  },
});

export default theme;
