import {ThemeProvider} from "styled-components";
import {theme} from "@/design/theme";
import Router from "@/routes";
import GlobalStyle from "@/design/GlobalStyle";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Router/>
        </ThemeProvider>
    );
}

export default App;