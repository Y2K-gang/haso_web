import { ThemeContext } from '@/hooks/theme/useTheme'
import {QueryClient, QueryClientProvider} from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "@/design/theme";
import Router from "@/routes/Router"
import GlobalStyle from "@/design/GlobalStyle";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
    },
  },
});

const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <ToastContainer />
          <Router />
        </BrowserRouter>
      </ThemeContext.Provider>
  </QueryClientProvider>
  );
}

export default Provider;