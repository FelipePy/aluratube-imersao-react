import styled from "styled-components";

export const StyledTimeline = styled.div`
  section {
    width: 100%;
    padding: 0;
    padding: 16px;
    overflow: hidden;

    h2 {
      font-size: 24px;
      margin: 20px;
      text-transform: capitalize;
    }

    ul {
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

      li {
        display: flex;

        a {
          text-align: center;
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          img {
            aspect-ratio: 16/9;
            font-weight: 500;
            object-fit: cover;
            max-width: 200px;
            height: auto;
            border-radius: 10px;
          }

          span {
            padding: 8px;
            text-transform: uppercase;
            color: ${(props) => props.theme.colors.text};
          }
        }
      }
    }
  }
`;
