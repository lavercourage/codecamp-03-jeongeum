{
  /* eslint-disable-next-line */
}

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import PublicApiBoardUI from "./publicApi.presenter";
// import { InputWrapper, InputSearch } from "./publicApi.styles";
import styled from "@emotion/styled";

export const WrapperWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #000000;
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

const PublicApiBoard = () => {
  const [search, setSearch] = useState("식집사");
  const [list, setList] = useState();
  const inputRef = useRef();

  useEffect(() => {
    testFunc();
    console.log("실행");
  }, [search]);

  const testFunc = async () => {
    if (!search) return;
    const { data } = await axios.get(
      `https://dapi.kakao.com/v2/search/vclip?query=${search}`,
      {
        headers: {
          Authorization: "KakaoAK 46e4ee24bc85a493f95d70ced9fc3fbf",
        },
      }
    );
    console.log(data);
    setList(data);
  };

  function onChangeSearch(e: any) {
    setSearch(inputRef.current.value);
  }

  return (
    <>
      <WrapperWrapper>
        <InputWrapper>
          <InputSearch
            type="text"
            ref={inputRef}
            onChange={onChangeSearch}
          ></InputSearch>
          {list &&
            list.documents.map((data: any) => (
              <ReactPlayer url={data.url}></ReactPlayer>
            ))}
        </InputWrapper>
      </WrapperWrapper>
      <PublicApiBoardUI></PublicApiBoardUI>
    </>
  );
};

export default PublicApiBoard;
