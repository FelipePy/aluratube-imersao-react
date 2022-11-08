import styled from "styled-components";

export const StyledHeader = styled.div`
  section img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    widht: 100%;
    padding: 16px 32px;
    gap: 16px;
    margin-top: 50px;
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

