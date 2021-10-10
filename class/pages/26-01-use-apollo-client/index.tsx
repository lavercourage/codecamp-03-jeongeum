import { useForm } from "react-hook-form";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function UseApolloClientPage() {
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

  async function onClickLogIn(dataano) {
    const result = await loginUser({
      variables: {
        email: dataano.MyEmail,
        password: dataano.MyPassword,
      },
    });
    const accessToken = result.data.loginUser.accessToken;

    // const result = await axios.get("koreajson.com"); // client.query와 비교해보기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    setAccessToken(accessToken);
    setUserInfo(userInfo);
  }

  return (
    <>
      {userInfo.email ? (
        `${userInfo.name}님 환영합니다`
      ) : (
        <form onSubmit={handleSubmit(onClickLogIn)}>
          이메일: <input type="text" {...register("MyEmail")} />
          <br />
          비밀번호: <input type="password" {...register("MyPassword")} />
          <br />
          <button type="submit">로그인하기</button>
          {/* <button type="button">
      이건 그냥 버튼! type="submit"은 실행시키는 타입 / 버튼의 default값은
      submit이라고 한다
    </button> */}
        </form>
      )}
    </>

    // <>
    //   {userInfo.email ? `${userInfo.name}님 환영합니다` : "로그인 해주세요!"}
    //   <form onSubmit={handleSubmit(onClickLogIn)}>
    //     이메일: <input type="text" {...register("MyEmail")} />
    //     <br />
    //     비밀번호: <input type="password" {...register("MyPassword")} />
    //     <br />
    //     <button type="submit">로그인하기</button>
    //     {/* <button type="button">
    //     이건 그냥 버튼! type="submit"은 실행시키는 타입 / 버튼의 default값은
    //     submit이라고 한다
    //   </button> */}
    //   </form>
    // </>
  );
}

// <form> 태그는 원래 있는 html 태그!
