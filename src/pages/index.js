import Menu from "../components/menu";
import Header from "../components/header";
import TimeLine from "../components/timeline";
import config from "/config.json";
import React from "react";
import { CSSReset } from "../components/CSSReset";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;
