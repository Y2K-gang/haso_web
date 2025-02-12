import { Colors } from "@/design/color";
import { fonts } from "@/design/fonts";
import { Shadow } from "@/design/shadow";
import { Shape } from "@/design/shape";

const defaultTheme = {
  colors: {
    primary: Colors.Primary,
    secondary: Colors.Secondary,
    white: Colors.White,
    text: Colors.Text,
    gray: Colors.Gray,
    black: Colors.Black,
    error: Colors.Error,
  },
  typography: {
    fonts,
    fontSizes: {
      title: {
        1: "2.5rem",
        2: "1.875rem",
        3: "1.688rem",
      },
      heading: {
        1: "1.5rem",
        2: "1.25rem",
        3: "1rem",
        4: "0.875rem",
      },
      body: {
        1: "1rem",
        2: "0.875rem",
      },
      caption: {
        1: "0.75rem",
      },
    },
    lineSpacing: {
      title: "1.5",
      heading: "1.3",
    },
  },
  shadow: Shadow,
  borderRadius: Shape,
} as const;

export type Theme = typeof defaultTheme;
export const theme = defaultTheme;
