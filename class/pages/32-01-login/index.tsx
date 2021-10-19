import { useContext, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUserExample] = useMutation(LOGIN_USER);

  function onChangeEmail(event) {
    setMyEmail(event.target.value);
  }

  function onChangePassword(event) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    const result = await loginUserExample({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });
    // console.log(result.data?.loginUser.accessToken);
    // localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
    localStorage.setItem("refreshToken", "true");
    setAccessToken(result.data?.loginUserExample.accessToken);
    router.push("/32-02-login-success");
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
