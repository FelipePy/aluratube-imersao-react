import config from "/config.json";
import React, { useContext } from "react";
import { StyledHeader, StyledBanner } from "./styled";
import Switch from "react-switch";
import { GlobalStyle } from "../../styles/global";
import { ThemeContext } from "styled-components";

function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

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
            <Switch
              className="switch"
              onChange={toggleTheme}
              checked={title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              uncheckedHandleIcon={"🌞"}
              checkedHandleIcon={"🌑"}
              height={17}
              width={40}
              handleDiameter={20}
              onColor={"#a9a9a9"}
              offColor={"#a9a9a9"}
              // colocar a cor do handle modo dark
              offHandleColor={"#4F4F4F"}
              onHandleColor={"#696969"}
            />
            <h2>{config.name}</h2>

            <p>{config.job}</p>
          </div>
        </div>
      </section>
    </StyledHeader>
  );
}

export default Header;
