import { useMutation } from "@apollo/client";
import { useRef, useState } from "react";

import ImageUploadUI from "./image.presenter";
import { UPLOAD_FILE } from "./image.queries";

export default function ImageUploadPage(props: any) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const fileRef = useRef<HTMLInputElement>();

  async function onChangeImg(e: any) {
    const myFile = e?.target.files?.[0];
    console.log("myfile: ", myFile);

    if (!myFile) {
      alert("파일이 없습니다!");
      // Modal.error({content: "파일이 없습니다!"})
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
    try {
      const result = await uploadFile({ variables: { file: myFile } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      console.log(error);
    }
    // try {
    //   const result = await uploadFile({
    //     variables: {
    //       file: myFile,
    //     },
    //   });
    //   console.log("url: ", result.data.uploadFile.url);
    //   props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    //   // setImageUrl(result.data.uploadFile.url);
    // } catch (e) {
    //   console.log(e);
    // }
  }

  function onClickFile() {
    fileRef.current?.click();
  }

  return (
    <ImageUploadUI
      onChangeImg={onChangeImg}
      // isPreview={isPreview}
      onClickFile={onClickFile}
      fileRef={fileRef}
      fileUrl={props.fileUrl}
    />
  );
}
//
