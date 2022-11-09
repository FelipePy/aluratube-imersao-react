import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;

  input {
    width: 90%;
    padding: 4px 6px;
    border-radius: 20px 20px 20px 20px;
    border: none;
    outline: none;
    background-color: #fff;
  }

  button {
    position: relative;
    left: -30px;
    flex: 1;
    cursor: pointer;
    border-radius: 20px 20px 20px 20px;
    border: none;
    background-color: #fff;
    @media (min-width: 600px) {
      width: 30px;
      height: 30px;
    }
  }
`;

export default StyledSearch;
