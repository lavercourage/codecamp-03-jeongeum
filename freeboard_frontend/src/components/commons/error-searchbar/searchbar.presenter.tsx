import { SearchBar, SearchBarIcon, SearchBarInput } from "./searchbar.styles";

export default function SearchBarBoardUI(props: any) {
  return (
    <SearchBar>
      <SearchBarIcon />
      <SearchBarInput
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearchBar}
      />
    </SearchBar>
  );
}
