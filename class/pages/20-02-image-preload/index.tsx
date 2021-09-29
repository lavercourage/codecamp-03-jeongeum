import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const divRef = useRef<HTMLDivElement>();
  const [imageTag, setImageTag] = useState();

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp"; // <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp"/>
    img.onload = () => {
      setImageTag(img);
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(imageTag);
  }

  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
    </>
  );
}
