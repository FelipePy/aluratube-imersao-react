import styled from "styled-components";

export const StyledHome = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  border-color: ${(props) => props.theme.colors.borderBase};
`;

export default StyledHome;
