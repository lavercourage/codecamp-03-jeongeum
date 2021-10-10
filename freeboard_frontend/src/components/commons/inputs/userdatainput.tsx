import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  color: #ffffff;
`;

const InputBar = styled.input`
  width: 384px;
  height: 62px;
  border-radius: 16px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 12px;
  padding-left: 16px;
  border: 1px solid #ffffff;
  background-color: transparent;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #ffffff;
    opacity: 0.6;
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 14px;
  margin-top: 8px;
  margin-left: 16px;
`;

export default function UserDataInputBar(props: any) {
  console.log(props);
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <InputBar
        type={props.type}
        {...props.register}
        placeholder={props.placeholder}
      />
      <ErrorMessage>{props.error}</ErrorMessage>
    </Wrapper>
  );
}
