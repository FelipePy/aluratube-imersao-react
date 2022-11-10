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
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          img {
            aspect-ratio: 16/9;
            font-weight: 500;
            object-fit: cover;
            max-width: 200px;
            height: auto;
            border-radius: 10px;
          }

          span {
            padding: 8px 0 0 8px;
            text-transform: uppercase;
            text-align: start;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            line-height: 1.5rem;
            font-weight: 600;
          }
        }
      }

      li:hover {
        a {
          transform: scale(1.2);
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }

  @media only screen and (max-device-width: 900px) {
    section {
      width: 100%;

      ul {
        width: 100%;
        display: grid;
        grid-gap: 8px;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

        li {
          width: 30%;

          a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            img {
              width: 150px;
            }

            span {
              display: block;
              -webkit-box-orient: vertical;
              white-space: nowrap;
              width: 12em;
              overflow: hidden;
              text-overflow: ellipsis;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`;
