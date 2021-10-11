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

const InputBar = styled.textarea`
  width: 996px;
  height: 320px;
  resize: none;
  color: #000000;
  font-size: 16px;
  margin-top: 16px;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #bdbdbd;
  }
`;

export const DetailInputBar = styled.input``;

// const ErrorMessage = styled.div`
//   color: #ff0000;
//   font-size: 14px;
//   margin-top: 8px;
//   margin-left: 16px;
// `;

export default function WriteDetailInputBar(props: any) {
  console.log(props);
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <InputBar
        // type={props.type}
        {...props.register}
        placeholder={props.placeholder}
      />
      {/* <ErrorMessage>{props.error}</ErrorMessage> */}
    </Wrapper>
  );
}
