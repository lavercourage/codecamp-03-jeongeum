import { Wrapper, MenuItem } from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props) {
  return (
    <Wrapper>
      <MenuItem id="/publicapi" onClick={props.onClickNav}>
        퍼블릭 api
      </MenuItem>
      <>|</>
      <MenuItem id="/boards/list-board" onClick={props.onClickNav}>
        자유게시판
      </MenuItem>
      <>|</>
      <MenuItem>중고마켓</MenuItem>
      <>|</>
      <MenuItem>마이페이지</MenuItem>
    </Wrapper>
  );
}
