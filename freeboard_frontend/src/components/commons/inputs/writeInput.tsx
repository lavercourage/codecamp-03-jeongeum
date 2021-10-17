import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const Title = styled.div`
  font-size: 16px;
  color: #000000;
`;

const InputBar = styled.input`
  width: 996px;
  height: 52px;
  color: #000000;
  font-size: 16px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #bdbdbd;
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  margin-top: 8px;
  margin-left: 16px;
`;

export default function WriteInputBar(props: any) {
  console.log(props);
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <InputBar
        type={props.type}
        {...props.register}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
      />
      <ErrorMessage>{props.error}</ErrorMessage>
    </Wrapper>
  );
}
