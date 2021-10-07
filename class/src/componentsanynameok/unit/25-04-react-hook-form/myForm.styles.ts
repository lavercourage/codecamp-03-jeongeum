import styled from "@emotion/styled";
import { IProps } from "./myForm.types";

export const MyButton = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "yellow" : "gray")};
  color: ${(props: IProps) => (props.isValid ? "red" : "white")};
`;

export const ErrorMessage = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: red;
`;
