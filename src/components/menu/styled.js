import styled from "styled-components";

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
  transition: all 0.50s;

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

  .switch {
    padding: 10px 20px;
    margin-right: 20px;
    margin-top: 10px;

    .react-switch-bg {
      border: 2px solid ${(props) => props.theme.colors.text};
    }

    .react-switch-handle {
      font-size: 24px;
      position: relative;
      left: 12%;
    }
  }
`;
