import React from "react";
import { StyledTimeline } from "./styled";

function TimeLine({ valueFilter, ...props }) {
  const playlistsNames = Object.keys(props.playlists);

  // Pesquisar Statement e Expressão
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName, index) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={index}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const videoTitle = video.title.toLowerCase();
                  const filter = valueFilter.toLowerCase();
                  return videoTitle.includes(filter);
                })
                .map((video, index) => {
                  return (
                    <div key={index}>
                      <a href={video.url}>
                        <img src={video.thumb} />
                        <span>{video.title}</span>
                      </a>
                    </div>
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
