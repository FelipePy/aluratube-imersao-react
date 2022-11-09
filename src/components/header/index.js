import config from "/config.json";
import React, { useContext } from "react";
import { StyledHeader, StyledBanner } from "./styled";
import { GlobalStyle } from "../../styles/global";

function Header() {
  return (
    <StyledHeader>
      <GlobalStyle />
      <StyledBanner banner={config.banner} />
      <section>
        <div className="user-info">
          <img
            src={`https://github.com/${config.github}.png`}
            alt="photo-perfil"
          />
          <div>
            
            <h2>{config.name}</h2>

            <p>{config.job}</p>
          </div>
        </div>
      </section>
    </StyledHeader>
  );
}

export default Header;
