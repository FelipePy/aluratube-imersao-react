import styled from "styled-components";

export const StyledBaseBoard = styled.div`
  section {
    ul {
      display: grid;
      grid-gap: 8px;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));

      li {
        a {
          img {
            width: 100px;
            height: 100px;
            border-radius: 60%;
          }
        }
      }
    }
  }
`;
