import { Modal } from "antd";
// import ErrorList from "antd/lib/form/ErrorList";

export default function ModalAlertPage() {
  function onClickSuccess() {
    try {
      Modal.confirm({ content: "게시물 등록에 성공했습니다." }); //   alert("게시물 등록에 성공했습니다.");
    } catch (error) {
      Modal.error({ content: "게시물 등록에 실패했습니다." }); //   alert("게시물 등록에 실패했습니다.");
    }
  }

  function onClickFail() {
    try {
      throw new Error("강제로 에러 발생시키기"); //   alert("게시물 등록에 성공했습니다.");
    } catch (error) {
      Modal.error({ content: error.message }); //
    }
  }

  return (
    <>
      <button onClick={onClickSuccess}>알림창 (성공했을 때)</button>
      <button onClick={onClickFail}>알림창 (실패했을 때)</button>
    </>
  );
}
