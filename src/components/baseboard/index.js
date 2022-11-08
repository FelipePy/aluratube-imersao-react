import { StyledBaseBoard } from "./styled";

function BaseBoard({ favorites }) {
  return (
    <StyledBaseBoard>
      <h2>Favoritos</h2>
      <ul>
        {favorites.map((favorite) => {
          return (
            <section>
              <div>
                <a href={favorite.url}>
                  <img src={favorite.thumb} />
                </a>
              </div>
            </section>
          );
        })}
      </ul>
    </StyledBaseBoard>
  );
}

export default BaseBoard;
