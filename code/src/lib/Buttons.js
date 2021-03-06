import styled from "styled-components/macro";

export const StyledButton = styled.button`
  background: none;
  color: #4cff42;
  font-family: "Inconsolata", monospace;
  text-transform: capitalize;
  outline: none;
  display: block;

  margin: ${(props) => (props.play ? "0 auto" : "0px")};
  font-size: ${(props) => (props.small ? "16px" : "26px")};
  padding: ${(props) => (props.small ? "4px 8px" : "10px 15px")};
`;
