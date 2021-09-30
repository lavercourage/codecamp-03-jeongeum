import { gql } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  function onChangeFile(event) {
    const file = event.target.files[0];
    console.log(file);
  }

  return (
    <>
      <div>이미지 업로드</div>
      <input type="file" onChange={onChangeFile} />
    </>
  );
}
