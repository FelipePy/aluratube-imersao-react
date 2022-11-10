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

function HomePage(props) {
  const [valueFilter, setValueFilter] = React.useState("");
  const [theme, setTheme] = useState(props.theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Menu
          valueFilter={valueFilter}
          setValueFilter={setValueFilter}
          toggleTheme={() => {
            if (theme.title === "light") {
              setTheme(dark);
              setCookie(null, "theme", JSON.stringify(dark), {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: "/",
              });
            } else {
              setTheme(light);
              setCookie(null, "theme", JSON.stringify(light), {
                maxAge: 60 * 60 * 24 * 30,
                path: "/",
              });
            }
          }}
        />
        <Header />
        <TimeLine
          playlists={config.playlists}
          valueFilter={valueFilter}
          favorites={config.favorites}
        />
      </ThemeProvider>
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
