import styled from "styled-components";

export const StyledHome = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border-color: ${(props) => props.theme.colors.borderBase};
`;

export default StyledHome;
