import SearchBarBoardUI from "./searchbar.presenter";
import _ from "lodash";

export default function SearchBarBoard(props: any) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchBar(event: any) {
    getDebounce(event.target.value);
  }

  return <SearchBarBoardUI onChangeSearchBar={onChangeSearchBar} />;
}
