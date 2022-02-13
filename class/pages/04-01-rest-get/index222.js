import axios from "axios";

export default function RestGetPage() {
  const zzz = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };

  // async와 await는 항상 같이 붙어있음

  // function zzz () {
  //     const result = axios.get('https://koreanjson.com/posts/1')
  //     console.log(result)
  // }

  return <button onClick={zzz}>REST-API 요청하기!!</button>;
}
