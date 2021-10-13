import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    /* font-size: 48px; */
  }
  @font-face {
    font-family: "pixelfont"; //폰트이름, 변수같음, 내 맘대로 이름 짓기 가능
    src: url("/font/scifibit.ttf"); //폰트 위치 경로 /->퍼블릭 /font->퍼블릭의 폰트폴더
    // 절대경로..씌앙..
  }
  @font-face {
    font-family: "DungGeunMo";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
