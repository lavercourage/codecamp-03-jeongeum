import { Wrapper, MenuItem } from "./LayoutNavigation.styles";

export default function LayoutNavigationUI() {
  return (
    <Wrapper>
      <MenuItem>퍼블릭 api</MenuItem>
      <>|</>
      <MenuItem>자유게시판</MenuItem>
      <>|</>
      <MenuItem>중고마켓</MenuItem>
      <>|</>
      <MenuItem>마이페이지</MenuItem>
    </Wrapper>
  );
}
