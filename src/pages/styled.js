import styled from "styled-components";

export const StyledHome = styled.div`
  background-color: ${(props) => props.background};
  color: ${(props) => props.textColor};
  border-color: ${(props) => props.borderBase};
`;

export default StyledHome;
