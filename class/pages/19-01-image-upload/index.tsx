import { gql, useMutation } from "@apollo/client";
import { useState, useRef } from "react";

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
  const [imageUrl, setImageUrl] = useState();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);
  const fileRef = useRef<HTMLInputElement>();

  async function onChangeFile(event) {
    const myFile = event.target.files[0];
    console.log(myFile);

    if (!myFile) {
      alert("파일이 없습니다.");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert("파일 용량이 너무 큽니다.(제한 5mb)");
      return;
    }

    // 11시 53분
    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg또는 png만 업로드 가능합니다!");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url);
  }

  const [myWriter, setMyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

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
    createBoard({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          // imageUrl: ["aaa", "bbb", "ccc"],
          images: [imageUrl],
        },
      },
    });
  }

  return (
    <>
      <div>이미지 업로드</div>
      <div
        style={{ width: "500px", height: "500px", backgroundColor: "indigo" }}
        onClick={onClickDiv}
      >
        이미지 선택
      </div>
      <input
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
      />
      <img
        src={`https://storage.googleapis.com/${imageUrl}`}
        style={{ width: "200px" }}
      />
      <br />
      작성자: <input type="text" onChange={onChangeMyWriter} />
      <br />
      비밀번호: <input type="text" onChange={onChangeMyPassword} />
      <br />
      제목: <input type="text" onChange={onChangeMyTitle} />
      <br />
      내용: <input type="text" onChange={onChangeMyContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
