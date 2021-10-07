import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";

// 중괄호 사용
// export -> import {_} from ""
// export default -> import _ from "" 이건 불러올때 이름 다르게 가능

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("올바른 이메일 형태가 아닙니다.")
    .required("반드시 입력해야하는 필수 사항입니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지 입니다.")
    .required("비밀번호는 반드시 입력해주세요."),
});

interface Iprops {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(props: Iprops) => (props.isValid ? "yellow" : "gray")};
  color: ${(props: Iprops) => (props.isValid ? "red" : "white")};
`;

const ErrorMessage = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: red;
`;

export default function ReactHookFormYupIsValidPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  function onClickLogin(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <div>리액트 훅 폼</div>
      이메일: <input type="text" {...register("myEmail")} />
      <ErrorMessage>{formState.errors.myEmail?.message}</ErrorMessage>
      비밀번호: <input type="password" {...register("myPassword")} />
      <ErrorMessage>{formState.errors.myPassword?.message}</ErrorMessage>
      <MyButton type="submit" isValid={formState.isValid}>
        로그인
      </MyButton>
    </form>
  );
}
// onClick={onClickLogin}
