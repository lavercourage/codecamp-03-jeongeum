import { gql, useMutation } from "@apollo/client";
import { useEffect, useRef, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPage() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  const [imageUrl, setImageUrl] = useState();
  const fileRef = useRef<HTMLInputElement>();
  const [isAAA, setIsAAA] = useState(true);
  // useState() 이거면 값은 false임 초기값이 빈값이니깐!

  const [mywriter, setMyWriter] = useState("");
  const [mypassword, setMyPassword] = useState("");
  const [mytitle, setMyTitle] = useState("");
  const [mycontents, setMyContents] = useState("");

  async function onChangeFile(event) {
    const myFile = event.target.files[0];
    console.log(myFile);

    if (!myFile) {
      alert("파일없음");
      return;
    }
    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일용량큼5mb제한");
      return;
    }
    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("확장자아님");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url);
    setIsAAA(false);
  }

  function onClickDiv() {
    fileRef.current?.click();
  }

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);
  }
  function onChangeMyPassword(event) {
    setMyPassword(event.target.value);
  }
  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);
  }
  function onChangeMyContents(event) {
    setMyContents(event.target.value);
  }
  function onClickSubmit() {
    if (
      mywriter !== "" &&
      mytitle !== "" &&
      mypassword !== "" &&
      mycontents !== "" &&
      imageUrl !== ""
    ) {
      alert("게시물을 등록!");
    }
    createBoard({
      variables: {
        createBoardInput: {
          writer: mywriter,
          title: mytitle,
          password: mypassword,
          contents: mycontents,
          images: [imageUrl],
        },
        // backend3를 보면 images => 이미지 여러개를 배열로 넣을 수 있음
        // [imageUrl]의 imageUrl은 24번줄의 imageUrl임
        // 1. 이미지를 3개 넣고 싶다면 [imageUrl1, imageUrl2, imageUrl3] 으로 만들어 주면 됨
        // 2. 아니면 imageUrl을 배열로 만들어 주면 됨 = 스프레드로 만들기 ?? 어떻게!?!?!?!??!?!
        // 2-2. imageUrls = ["aaa", "bbb", "ccc"] 이미지urls로 만들어서 하는건데 이걸 어떻게 해??!?!?!
      },
    });
  }

  return (
    <>
      <div>이미지 업로드</div>
      {isAAA && (
        <div
          style={{ width: "200px", height: "200px", backgroundColor: "brown" }}
          onClick={onClickDiv}
          // src={`https://storage.googleapis.com/${imageUrl}`}
          // style={{ width: "800px" }}
        >
          이미지 선택
        </div>
      )}
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
      {!isAAA && (
        <img
          src={`https://storage.googleapis.com/${imageUrl}`}
          style={{ width: "200px", height: "200px" }}
        />
      )}
      <br />
      작성자 <input type="text" onChange={onChangeMyWriter} /> <br />
      비밀번호 <input type="text" onChange={onChangeMyPassword} /> <br />
      제목 <input type="text" onChange={onChangeMyTitle} /> <br />
      내용 <input type="text" onChange={onChangeMyContents} /> <br />
      <button onClick={onClickSubmit}>등록</button>
    </>
  );
}
