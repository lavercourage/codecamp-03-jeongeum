import { useRef, useState } from "react";
import { imageValidation } from "../../src/commons/libraries/validation";
import { gql, useMutation } from "@apollo/client";

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

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [myFile, setMyFile] = useState();
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>();

  function onClickOrange() {
    fileRef.current.click();
  }

  function onChangeFile(event) {
    const file = event.target.files[0];
    if (!imageValidation(file)) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    // readAsDataURL 여기서 나오는 url은 내 컴퓨터에서만 생기는 임시 url / 다른 사람 컴퓨터에 가면 없음
    fileReader.onload = (data) => {
      // console.log(data.target.result);
      setImageUrl(data.target.result);
      setMyFile(file);
    };
  }

  async function onClickSubmit() {
    const start = performance.now();
    await Promise.all([
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
      uploadFile({ variables: { file: myFile } }),
    ]);

    // const result1 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result2 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result3 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });
    // const result4 = await uploadFile({
    //   variables: {
    //     file: myFile,
    //   },
    // });

    const end = performance.now();
    console.log(end - start);

    // const url = result.data.uploadFile.url;

    // 게시물등록
    // createBoard({variables: {
    // ...
    // images: urls
    // } })
  }

  return (
    <>
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "orange" }}
        onClick={onClickOrange}
      >
        이미지업로드
      </div>
      <img src={imageUrl} style={{ height: "500px" }} />
      <input type="file" ref={fileRef} onChange={onChangeFile} />
      <button onClick={onClickSubmit}>게시물등록</button>
    </>
  );
}
