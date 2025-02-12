import { ThemeContext } from './theme'
import { theme } from '@/design/theme'
import GlobalStyles from '@/design/GlobalStyle'
import { ToastContainer } from 'react-toastify';

interface ThemeProviderProps {
    children: React.ReactNode;
}

function Provider({children}: ThemeProviderProps) {
    return (
        <ThemeContext.Provider value={theme}>
            <GlobalStyles/>
            <ToastContainer />
            {children}
        </ThemeContext.Provider>
    );
}

export default Provider;
