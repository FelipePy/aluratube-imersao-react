import Menu from "../components/menu";
import Header from "../components/header";
import TimeLine from "../components/timeline";
import BaseBoard from "../components/baseboard";
import config from "/config.json";
import React from "react";
import { CSSReset } from "../components/CSSReset";
import { Link } from "react-router-dom";

function HomePage() {
  const [valueFilter, setValueFilter] = React.useState("");
  return (
    <>
      <CSSReset />
      <div>
        <Menu valueFilter={valueFilter} setValueFilter={setValueFilter} />
        <Header />
        <TimeLine playlists={config.playlists} valueFilter={valueFilter} />
        <BaseBoard favorites={config.favorites} valueFilter={valueFilter} />
      </div>
    </>
  );
}

export default HomePage;
