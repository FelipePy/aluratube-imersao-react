import React from "react";
import { GlobalStyle } from "../../styles/global";
import { StyledTimeline } from "./styled";
import BaseBoard from "./components/baseboard";

function TimeLine({ valueFilter, ...props }) {
  const playlistsNames = Object.keys(props.playlists);

  // Pesquisar Statement e Expressão
  return (
    <StyledTimeline>
      <GlobalStyle />
      {playlistsNames.map((playlistName, index) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={index}>
            <h2>{playlistName}</h2>
            <ul>
              {videos
                .filter((video) => {
                  const videoTitle = video.title.toLowerCase();
                  const filter = valueFilter.toLowerCase();
                  return videoTitle.includes(filter);
                })
                .map((video, index) => {
                  return (
                    <li key={index}>
                      <a href={video.url}>
                        <img src={video.thumb} />
                        <span>{video.title}</span>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </section>
        );
      })}
      <BaseBoard favorites={props.favorites} valueFilter={valueFilter} />
    </StyledTimeline>
  );
}

export default TimeLine;
