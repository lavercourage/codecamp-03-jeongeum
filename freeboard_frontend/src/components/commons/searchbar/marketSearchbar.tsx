import _ from "lodash";
import { FireFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

const SearchBar = styled.div`
  width: 500px;
  height: 52px;
  border-radius: 16px;
  background-color: #f2f2f2;
  margin-top: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

const SearchBarIcon = styled(FireFilled)`
  color: #ffd600;
  font-size: 30px;
  /* cursor: pointer; */
  /* :hover {
    color: gray;
  } */
`;

const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  /* outline: none; */
  background: none;
  margin: 0 20px;
  :focus {
    outline: none;
  }
`;

export default function MarketSearchBarBoard(props: any) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchBar(event: any) {
    getDebounce(event.target.value);
  }
  console.log("가가가가: ", props);
  return (
    <>
      <SearchBar>
        <SearchBarIcon />
        <SearchBarInput
          placeholder="상품명을 입력해 주세요."
          onChange={onChangeSearchBar}
        />
      </SearchBar>
    </>
  );
}
