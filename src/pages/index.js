import Menu from "../components/menu";
import Header from "../components/header";
import TimeLine from "../components/timeline";
import config from "/config.json";
import React, { useContext, useState } from "react";
import { GlobalStyle } from "../styles/global";
import { ThemeContext, ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { parseCookies, setCookie } from "nookies";
import { ColorModeContext } from "../components/menu/components/ ColorMode";

function HomePage(props) {
  const [valueFilter, setValueFilter] = React.useState("");
  const context = useContext(ColorModeContext);

  return (
    <>
        <Menu
          valueFilter={valueFilter}
          setValueFilter={setValueFilter}
          toggleTheme={context.toggleMode}
        />
        <Header />
        <TimeLine
          playlists={config.playlists}
          valueFilter={valueFilter}
          favorites={config.favorites}
        />
    </>
  );
}

export default HomePage;

export async function getServerSideProps(context) {
  // Parse
  const cookies = parseCookies(context);

  // Destroy
  // nookies.destroy(ctx, 'cookieName')

  return {
    props: {
      theme: cookies.theme ? JSON.parse(cookies.theme) : light,
    },
  };
}
