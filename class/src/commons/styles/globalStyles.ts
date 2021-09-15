import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 90px;
  }
  @font-face {
    font-family: "mymyfont"; //폰트이름, 변수같음, 내 맘대로 이름 짓기 가능
    src: url("/font/scifibit.ttf"); //폰트 위치 경로 /->퍼블릭 /font 퍼블릭의 폰트폴더
    // 절대경로..씌앙..
  }
`;
