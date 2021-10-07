import styled from "@emotion/styled";

interface IProps {
  isValid: boolean;
}

const SignInButton = styled.button`
  width: 384px;
  height: 64px;
  border: none;
  margin-top: 40px;
  border-radius: 16px;
  font-weight: bold;
  color: ${(props: IProps) => (props.isValid ? "#000000" : "#bdbdbd")};
  background-color: ${(props: IProps) =>
    props.isValid ? "#ffd600" : "#4f4f4f"};
  cursor: ${(props: IProps) => (props.isValid ? "pointer" : "default")};
`;

export default function RegisterButton(props: any) {
  return (
    <SignInButton type={props.type} isValid={props.isValid}>
      {props.name}
    </SignInButton>
  );
}

{
  /* <SignInButton<HTMLButtonElement> type={props.type} isValid={props.isValid}>
      {props.name}
    </SignInButton> */
}
