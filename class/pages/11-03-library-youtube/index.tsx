import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

const MyYoutube = styled(ReactPlayer)`
  /* width: 1920px; */
  /* 이 라이브러리는 사이즈가 여기 적용되지 않음 */
  border: 3px solid yellow;
  margin: 20px;
`;

export default function LibraryYoutubePage() {
  return (
    <MyYoutube
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      width={1920}
      height={1080}
    />
  );
}
