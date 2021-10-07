import styled from "@emotion/styled";

interface IProps {
  isValid: boolean;
}

const MyBotton = styled.button`
  width: 500px;
  height: 300px;
  color: white;
  background-color: ${(props: IProps) => (props.isValid ? "orange" : "teal")};
`;

export default function Button01(props) {
  return (
    <MyBotton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyBotton>
  );
}
