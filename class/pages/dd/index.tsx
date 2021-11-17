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
  const fileRef = useRef<HTMLInputElement>();
  const [imageUrl, setImageUrl] = useState();
  const [myFile, setMyFile] = useState();
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onClickGray() {
    fileRef.current.click();
  }
  function onChangeFile(event) {
    const file = event.target.files[0];
    if (!imageValidation(file)) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // readAsDataURL : 내컴퓨터에서만 사용 되는 임시 URL을 뽑아준다.
    fileReader.onload = (data) => {
      setImageUrl(data.target.result); // data.target.result: 뽑아져 나온 임시 URL
      console.log(data.target.result);
      setMyFile(file);
    };
  }
  async function onClickSubmit() {
    const start = performance.now();
    await Promise.all([
      // uploadFile({ variables: { file: myFile } }),
      // uploadFile({ variables: { file: myFile } }),
      // uploadFile({ variables: { file: myFile } }),
      // uploadFile({ variables: { file: myFile } }),
      // uploadFile({ variables: { file: myFile } }),
      // uploadFile({ variables: { file: myFile } }),
      // < 소요 시간 : 1827.5999999996275 >
    ]);
    const result1 = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    const result2 = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    const result3 = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    const result4 = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    const result5 = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    const result6 = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    // < 소요시간 : 3311.4000000003725 >
    // const url = result.data.uploadFile.url;
    // // 게시물 등록
    // //   creatBoard({ variables:{
    // //     ...
    // //      }  })
    const end = performance.now();
    console.log(end - start);
  }
  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={onClickGray}
      >
        이미지 업로드
      </div>
      <img src={imageUrl} style={{ height: "800px" }} />
      <input type="file" ref={fileRef} onChange={onChangeFile}></input>
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}
// 단순 내용추가
