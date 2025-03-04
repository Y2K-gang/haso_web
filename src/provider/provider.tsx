import { ThemeContext } from '@/hooks/theme/useTheme'
import { theme } from "@/design/theme";
import Router from "@/routes/Router"
import GlobalStyle from "@/design/GlobalStyle";
import { ToastContainer } from "react-toastify";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const Provider = ({children}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      <ToastContainer />
      <GlobalStyle />
      <Router />
      {children}
    </ThemeContext.Provider>
  );
}

export default Provider;