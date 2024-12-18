import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { thema } from "@/design/theme";
import GlobalStyles from "@/design/GlobalStyle"; // 선택: 글로벌 스타일 정의

interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <StyledThemeProvider theme={thema}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}

export default ThemeProvider;