import styled from "styled-components";

export const StyledHome = styled.div`
  background-color: ${(props) => props.colors.background};
  color: ${(props) => props.colors.textColor};
  border-color: ${(props) => props.colors.borderBase};
`;

export default StyledHome;
