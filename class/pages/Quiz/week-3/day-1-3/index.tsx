import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const MyVideo = styled(ReactPlayer)``;

export default function YoutubePage() {
  return (
    <MyVideo url="https://youtu.be/IWVWGPS7sgA" width={800} height={600} />
  );
}
