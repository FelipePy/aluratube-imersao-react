import React, { useContext } from "react"
import { ThemeProvider } from "styled-components";
import ColorModeProvider from "../components/menu/components/ ColorMode";
import { ColorModeContext } from "../components/menu/components/ ColorMode";
import dark from "../styles/themes/dark";

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={props.theme}>
            {props.children}
        </ColorModeProvider>
    )
}


function MyApp({ Component, pageProps }) {
    const context = useContext(ColorModeContext);

    return (
        <ThemeProvider theme={context.mode}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default function _App(props) {
    return (
        <ProviderWrapper theme={props.pageProps.theme}>
            <MyApp {...props }/>
        </ProviderWrapper>
    )
}

export async function getServerSideProps(context) {
    // Parse
    const cookies = parseCookies(context);
  
    return {
      props: {
        theme: cookies.theme ? JSON.parse(cookies.theme) : light,
      },
    };
  }