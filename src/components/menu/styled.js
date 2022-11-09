import styled from "styled-components";
import StyledHome from "../../pages/styled";

export const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid black;
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  width: 100%;

  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${(props) => props.theme.colors.text};
    }
  }
`;
