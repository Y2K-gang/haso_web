import { ThemeProvider } from "styled-components";
import { theme } from "@/design/theme";
import Router from "@/routes";
import GlobalStyle from "@/design/GlobalStyle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
