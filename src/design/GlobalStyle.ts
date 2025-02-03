import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${({ theme }) =>
            theme.typography.fonts["Pretendard-Medium"]};
            color: ${({ theme }) => theme.colors.text.Dark};
            background-color: ${({ theme }) => theme.colors.white};
            line-height: 1;
    }

    ${fonts}
    a {
        text-decoration: none;
        color: inherit;
    }
    li {
        list-style-type: none;
    }
    input:focus {
        border-color: ${({ theme }) => theme.colors.primary[400]};
    }
`;

export default GlobalStyles;
