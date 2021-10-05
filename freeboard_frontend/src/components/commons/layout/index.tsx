import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
// import { useRouter } from "next/router";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const HIDDEN_HEADER = ["/create-board"];

export default function Layout(props) {
  // const router = useRouter();
  // const isHiddenHeader = HIDDEN_HEADER.includes(router.pathname)

  return (
    <div style={{ width: "1920px" }}>
      {/* {!isHiddenHeader && <LayoutHeader />} */}
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
    </div>
  );
}
