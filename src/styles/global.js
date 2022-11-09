import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        color: ${(props) => props.theme.colors.text};

        a {
            text-decoration: none;
            color: ${(props) => props.theme.colors.text};
        }
    }


::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-thumb {
    background-color: #a9a9a9;
    border-radius: 5px;
}
`;
