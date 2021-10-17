import styled from "@emotion/styled";

// interface IProps {
//   isValid: boolean;
// }

const SignInButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  /* margin-top: 80px; */
  margin: 80px 12px 0px;
  color: "#000000";
  background-color: "#ffd600";
  cursor: "pointer";
`;

export default function ToListButton(props: any) {
  return (
    <SignInButton
      type={props.type}
      // isValid={props.isValid}
      onClick={props.onClick}
    >
      {props.name}
    </SignInButton>
  );
}

{
  /* <SignInButton<HTMLButtonElement> type={props.type} isValid={props.isValid}>
      {props.name}
    </SignInButton> */
}
