import { ChangeEvent, useRef, useState } from "react";
import { checkValidationImage } from "../../../../commons/libraries/validations/checkValidationImage";
import Uploads01UI from "./Uploads01.presenter";
import { IUploads01Props } from "./Uploads01.types";

export default function Uploads01(props: IUploads01Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState("");
  // const [uploadFile] = useMutation(UPLOAD_FILE); // 1차 실습

  function onClickUpload() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setFileUrl(data.target?.result as string);
      props.onChangeFiles(file, props.index);
    };
  }

  return (
    <Uploads01UI
      fileRef={fileRef}
      // fileUrl={props.fileUrl} // 1차 실습(부모 프리젠터에서 props로 넘겨준 실제스토리지 주소)
      fileUrl={fileUrl} // 2차 실습(props가 아닌, 컴포넌트 자체에서 만든 임시미리보기 주소)
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
