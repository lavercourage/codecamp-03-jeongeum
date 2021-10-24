import { Wrapper, MenuItem } from "./LayoutNavigation.styles";

export default function LayoutNavigationUI(props: any) {
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
      <MenuItem id="/market/list-board" onClick={props.onClickNav}>
        중고마켓
      </MenuItem>
      <>|</>
      <MenuItem id="/market/create-board" onClick={props.onClickNav}>
        마이페이지와 중고마켓글쓰기
      </MenuItem>
    </Wrapper>
  );
}
