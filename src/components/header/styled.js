import styled from "styled-components";

export const StyledHeader = styled.div`
  section {
    display: flex;
    justify-content: space-between;
    align-items: center
    background-color ${(props) => props.theme.colors.background};
  }

  section img {
    width: 100px;
    height: 100px;
    border-radius: 30%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 20px;
    gap: 16px;
    margin-top: 10px;
    background-color: ${(props) => props.theme.colors.background1};
  }
`;

export const StyledBanner = styled.div`
  height: 230px;
  background-image: url(${({ banner }) => banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  // arredondar as bordas de baixo
  border-radius: 0 0 10px 10px;
`;
