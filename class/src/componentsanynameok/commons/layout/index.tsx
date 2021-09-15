import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import { useRouter } from "next/router";

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
  width: 300px;
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
      <SidebarWrapper>
        <Sidebar>여기는 사이드바 영역입니다.</Sidebar>
        <Body>{props.children}</Body>
      </SidebarWrapper>
      {!isHiddenFooter && <LayoutFooter />}
      {/* <Footer>여기는 푸터 영역입니다.</Footer> */}
    </Wrapper>
  );
}
