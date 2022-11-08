import { StyledBaseBoard } from "./styled";

function BaseBoard({ valueFilter, ...props }) {
  const favorites = props.favorites;
  return (
    <StyledBaseBoard>
      <h2>Favoritos</h2>
      <ul>
        {favorites
          .filter((favorite) => {
            const favoriteTitle = favorite.title.toLowerCase();
            const filter = valueFilter.toLowerCase();
            return favoriteTitle.includes(filter);
          })
          .map((favorite, index) => {
            return (
              <section key={index}>
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
