export default function BrowserStoragePage() {
  function onClickSaveCookie() {
    document.cookie = "aaa=쿠키입니당";
  }
  function onClickSaveLocalStorage() {
    localStorage.setItem("bbb", "로컬입니당");
  }
  function onClickSaveSessionStorage() {
    sessionStorage.setItem("ccc", "세션입니당");
  }

  function onClickGetCookie() {
    const temp = document.cookie // temp =  "aaa=철수"
      .split("; ")
      .filter((el) => el.startsWith("aaa="))[0];
    // console.log("쿠키: ", document.cookie);

    console.log(temp.split("=")[1]);
  }
  function onClickGetLocalStorage() {
    const BBB = localStorage.getItem("bbb");
    console.log("로컬스토리지: ", BBB);
  }
  function onClickGetSessionStorage() {
    const CCC = sessionStorage.getItem("ccc");
    console.log("세션스토리지: ", CCC);
  }

  return (
    <>
      <button onClick={onClickSaveCookie}>쿠키 저장</button> <br />
      <button onClick={onClickSaveLocalStorage}>로컬스토리지 저장</button>
      <br />
      <button onClick={onClickSaveSessionStorage}>세션스토리지 저장</button>
      ================================================================
      <button onClick={onClickGetCookie}>쿠키 값 불러오기</button> <br />
      <button onClick={onClickGetLocalStorage}>로컬스토리지 값 불러오기</button>
      <br />
      <button onClick={onClickGetSessionStorage}>
        세션스토리지 값 불러오기
      </button>
    </>
  );
}
