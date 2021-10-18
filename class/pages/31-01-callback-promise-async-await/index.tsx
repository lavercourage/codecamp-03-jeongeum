import { useMutation } from "@apollo/client";
import axios from "axios";
import { useState } from "react";

export default function CallbackPromiseAsyncAwaitPage() {
  const [myCallback, setMyCallback] = useState([]);
  const [myPromise, setMyPromise] = useState([]);
  const [myAsyncAwait, setMyAsyncAwait] = useState([]);

  axios.get("http://numbersapi.com/random?min=1&max=200");

  function onClickMyCallback() {
    const ccc = new XMLHttpRequest();
    ccc.open("get", "http://numbersapi.com/random?min=1&max=200");
    ccc.send();
    ccc.addEventListener("load", (res: any) => {
      //   console.log(res);
      const num = res.target.response.split(" ")[0];
      //   setMyCallback(num);

      const aaa = new XMLHttpRequest();
      aaa.open("get", `http://koreanjson.com/posts/${num}`);
      aaa.send();
      aaa.addEventListener("load", (res: any) => {
        const user = JSON.parse(res.target.response).UserId;

        const aaa2 = new XMLHttpRequest();
        aaa2.open("get", `http://koreanjson.com/posts?userId=${user}`);
        aaa2.send();
        aaa2.addEventListener("load", (res2: any) => {
          const result = JSON.parse(res2.target.response); // 특정 유저가 작성한 다른 게시물 목록
          setMyCallback(result);
        });
      });
    });
  }

  // new Promise((resolve, reject) => {
  //   // 외부에 요청하기
  //   if(성공) resolve()
  //   if(실패) reject()
  // })

  function onClickMyPromise() {
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        const num = res.data.split(" ")[0];
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res2) => {
        const user = res2.data.UserId;
        axios.get(`http://koreanjson.com/posts?userId=${user}`);
      })
      .then((res3: any) => {
        setMyPromise(res3.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function onClickMyAsyncAwait() {
    const res1 = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const num = res1.data.split(" ")[0];

    const res2 = await axios.get(`http://koreanjson.com/posts/${num}`);
    const user = res2.data.UserId;

    const res3 = await axios.get(`http://koreanjson.com/posts?userId=${user}`);
    setMyAsyncAwait(res3.data);
  }

  return (
    <>
      <h1>콜백과 친구들</h1>
      <span>
        결과:{" "}
        {myCallback.map((el) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </span>
      <button onClick={onClickMyCallback}>Callback 요청하기!</button>
      <span>
        결과:{" "}
        {myPromise.map((el) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </span>
      <button onClick={onClickMyPromise}>Promise 요청하기!</button>
      <span>
        결과:{" "}
        {myAsyncAwait.map((el) => (
          <div key={el.title}>{el.title}</div>
        ))}
      </span>
      <button onClick={onClickMyAsyncAwait}>Promise 요청하기!</button>
    </>
  );
}
