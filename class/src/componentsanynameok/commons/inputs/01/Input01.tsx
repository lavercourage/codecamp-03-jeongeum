import styled from "@emotion/styled";

const Aaa = styled.div`
  font-size: 20px;
`;

const Input = styled.input`
  width: 900px;
  height: 200px;
  border: 1px solid red;
`;

export default function Input01(props) {
  return (
    <>
      <Aaa>{props.name}</Aaa>
      <Input
        type={props.type}
        {...props.register}
        placeholder={props.placeholder}
      />
    </>
  );
}
