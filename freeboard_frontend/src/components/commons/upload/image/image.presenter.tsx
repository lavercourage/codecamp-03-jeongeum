import {
  ImageInputFunctionButton,
  ImageInputButton,
  ImagePreview,
} from "./image.styles";

export default function ImageUploadUI(props: any) {
  return (
    <>
      {props.fileUrl ? (
        <ImagePreview
          onClick={props.onClickFile}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <ImageInputFunctionButton
          // 이미지 버튼 css <- ref 이용해서 연결
          onClick={props.onClickFile}
        >
          🥰
        </ImageInputFunctionButton>
      )}
      <ImageInputButton
        // 실제 이미지 넣는 기능 버튼
        ref={props.fileRef}
        type="file"
        onChange={props.onChangeImg}
      />
    </>
  );
}
