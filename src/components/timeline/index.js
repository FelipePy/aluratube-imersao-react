import React from "react";
import { StyledTimeline } from "./styled";

function TimeLine(props) {
  const playlistsNames = Object.keys(props.playlists);

  // Pesquisar Statement e Expressão
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

export default TimeLine;
