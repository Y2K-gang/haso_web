import { createContext, useContext } from 'react'
import { theme as defaultTheme } from '@/design/theme'

export type UseTheme = typeof defaultTheme

export const ThemeContext = createContext<UseTheme | undefined>(undefined)

export const useTheme = () => {
    const theme = useContext(ThemeContext)
    if (!theme) {
        throw new Error('useTheme must be used within ThemeProvider')
    }
    return theme
}