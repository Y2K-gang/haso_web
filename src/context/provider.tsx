import { ThemeContext } from "./theme";
import { theme } from "@/design/theme";
import GlobalStyles from "@/design/GlobalStyle";
import { ToastContainer } from "react-toastify";
import Router from "@/routes"

interface ThemeProviderProps {
  children?: React.ReactNode;
}

function Provider({ children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyles />
      <ToastContainer />
      <Router />
      {children}
    </ThemeContext.Provider>
  );
}

export default Provider;
