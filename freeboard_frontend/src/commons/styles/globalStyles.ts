import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
  }
  @font-face {
    font-family: "DungGeunMo"; //폰트이름 내맘대로 지을 수 있음
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "NotoSansKR";
    src: url("/font/NotoSansKR-Regular.otf");
    /* font-weight: bold; */
    /* font-style: ; */
  }
`;
