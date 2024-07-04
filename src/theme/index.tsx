import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#F6F6F6",
    },
  },
  typography: {
    fontFamily: "Gilroy, sans-serif",
    h5: {
      fontWeight: 600,
      color: "#920000",
    },
    body2: {
      lineHeight: 1.5,
      color: "#008600",
    },
    body1: {
      color: "#FFFFFF",
    },
  },
});

export default theme;
