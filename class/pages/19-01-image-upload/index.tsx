import { gql, useMutation } from "@apollo/client";
import { useRef, useState } from "react";

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
  const [isPreview, setisPreview] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>();
  const [myInputs, setMyInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });

  async function onChangeImg(e: any) {
    const myFile = e.target.files[0];
    console.log("myfile: ", myFile);

    if (!myFile) {
      alert("파일이 없습니다!");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      alert("5MB이하만 업로드 가능합니다!");
    }

    if (
      !myFile.type.includes("jpeg") &&
      !myFile.type.includes("png") &&
      !myFile.type.includes("webp") &&
      !myFile.type.includes("jpg")
    ) {
      alert("올바른 파일의 형식이 아닙니다!");
    }
    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log("url: ", result.data.uploadFile.url);
    setImageUrl(result.data.uploadFile.url);
    setisPreview(true);
  }

  function onClickFile() {
    fileRef.current?.click();
  }

  function onChangeMyInputs(e: any) {
    setMyInputs({
      ...myInputs,
      [e.target.name]: e.target.value,
    });
  }

  function onClickSubmit() {
    createBoard({
      variables: {
        createBoardInput: { ...myInputs },
      },
    });
  }

  return (
    <>
      <div>이미지 업로드</div>
      {!isPreview && (
        <div
          // 이미지 버튼 css <- ref 이용해서 연결
          onClick={onClickFile}
          style={{
            width: "100px",
            height: "100px",
            paddingTop: "20px",
            backgroundColor: "#ffdde6",
            textAlign: "center",
            fontSize: "40px",
          }}
        >
          🥰
        </div>
      )}
      <input
        // 실제 이미지 넣는 기능 버튼
        ref={fileRef}
        style={{ display: "none" }}
        type="file"
        onChange={onChangeImg}
      />
      {isPreview && (
        <img
          // 미리보기태그
          // 스토리지에만 저장
          style={{ width: "500px" }}
          src={`https://storage.googleapis.com/${imageUrl}`}
        />
      )}
      <br />
      writer: <input type="text" name="writer" onChange={onChangeMyInputs} />
      <br />
      password:{" "}
      <input type="text" name="password" onChange={onChangeMyInputs} />
      <br />
      title: <input type="text" name="title" onChange={onChangeMyInputs} />
      <br />
      contents:{" "}
      <input type="text" name="contents" onChange={onChangeMyInputs} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
