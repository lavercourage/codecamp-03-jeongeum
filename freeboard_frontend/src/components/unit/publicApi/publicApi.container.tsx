{
  /* eslint-disable-next-line */
}

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
// import PublicApiBoardUI from "./publicApi.presenter";
import styled from "@emotion/styled";

export const WrapperWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px 20px 20px;
`;
const InputSearch = styled.input`
  width: 250px;
  height: 35px;
  margin-bottom: 20px;
`;
const LinkVideoView = styled(ReactPlayer)`
  margin: 20px 0;
`;

const PublicApiBoard = () => {
  const [search, setSearch] = useState("식집사");
  const [list, setList] = useState();
  const inputRef = useRef();

  useEffect(() => {
    searchMedia();
    console.log("실행");
  }, [search]);

  const searchMedia = async () => {
    if (!search) return;
    const { data } = await axios.get(
      `https://dapi.kakao.com/v2/search/vclip?query=${search}`,
      {
        headers: {
          Authorization: "KakaoAK 46e4ee24bc85a493f95d70ced9fc3fbf",
        },
      }
    );
    setList(data);
  };

  const onChangeSearch = (e: any) => {
    setSearch(inputRef.current.value);
  };

  return (
    <>
      <WrapperWrapper>
        <InputWrapper>
          <InputSearch
            type="text"
            ref={inputRef}
            onChange={onChangeSearch}
            placeholder="식집사"
          ></InputSearch>
          {list &&
            list.documents.map((data: any) => (
              <LinkVideoView url={data.url}></LinkVideoView>
            ))}
        </InputWrapper>
      </WrapperWrapper>
      {/* <PublicApiBoardUI></PublicApiBoardUI> */}
    </>
  );
};

export default PublicApiBoard;
