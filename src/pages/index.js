import Menu from "../components/menu";
import Header from "../components/header";
import TimeLine from "../components/timeline";
import Banner from "../components/banner";
import BaseBoard from "../components/baseboard";
import config from "/config.json";
import React from "react";
import { CSSReset } from "../components/CSSReset";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div>
        <Banner />
        <Menu />
        <Header />
        <TimeLine playlists={config.playlists} />
        <BaseBoard favorites={config.favorites}/>
      </div>
    </>
  );
}

export default HomePage;
