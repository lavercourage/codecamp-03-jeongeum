import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FirebasePage() {
  async function onClickSubmit() {
    const blog = collection(getFirestore(firebaseApp), "blog");
    await addDoc(blog, {
      writer: "김밥공주",
      title: "어명이오",
      contents: "내용이오",
    });
  }

  async function onClickFetch() {
    const blog = collection(getFirestore(firebaseApp), "blog");
    const result = await getDocs(blog);
    const aaa = result.docs.map((el) => el.data());
    console.log(aaa);
  }

  return (
    <>
      <div>파이어베이스 페이지입니다</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}
