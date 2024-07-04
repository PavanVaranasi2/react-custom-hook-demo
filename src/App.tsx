import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PostsPage />
    </ThemeProvider>
  );
}

export default App;
