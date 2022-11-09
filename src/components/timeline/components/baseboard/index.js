import { StyledBaseBoard } from "./styled";

function BaseBoard({ valueFilter, ...props }) {
  const favorites = props.favorites;
  return (
    <StyledBaseBoard>
      <section>
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
                <li key={index}>
                  <a href={favorite.url}>
                    <img src={favorite.thumb} />
                  </a>
                </li>
              );
            })}
        </ul>
      </section>
    </StyledBaseBoard>
  );
}

export default BaseBoard;
