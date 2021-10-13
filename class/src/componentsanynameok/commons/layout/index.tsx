import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import { useRouter } from "next/router";
import LayoutBanner from "./banner/LayoutBanner.container";

const Wrapper = styled.div``;
// const Header = styled.div`
//   background-color: lime;
//   height: 200px;
// `;
const Body = styled.div``;
// const Footer = styled.div`
//   background-color: indigo;
//   height: 300px;
// `;
const SidebarWrapper = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  background-color: pink;
  width: 360px;
  /* height: 1000px; */
`;

const HIDDEN_FOOTER = ["/13-01-layout-hidden"];

export default function Layout(props) {
  const router = useRouter();
  // console.log(router);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.pathname);

  return (
    <Wrapper>
      {/* <Header>여기는 헤더 영역입니다.</Header> */}
      <LayoutHeader />
      <LayoutBanner />
      {/* <LayoutNavigation /> */}
      <SidebarWrapper>
        <Sidebar>여기는 사이드바 영역입니다.</Sidebar>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      {!isHiddenFooter && <LayoutFooter />}
      {/* <Footer>여기는 푸터 영역입니다.</Footer> */}
    </Wrapper>
  );
}

// 이 인덱스 파일은 레이아웃이 담긴 폴더에 같이 작업..?
