import LayoutBanner from "./banner/layoutBanner.container";
import LayoutHeader from "./header/layoutHeader.container";
import LayoutNavigation from "./navigation/layoutNavigation.container";
// import LayoutFooter from "./footer/layoutFooter.container";
import styled from "@emotion/styled";
// import { useRouter } from "next/router";

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const HIDDEN_HEADER = ["/create-board"];

export default function Layout(props: any) {
  console.log("Layout: ", props);
  // const router = useRouter();
  // const isHiddenHeader = HIDDEN_HEADER.includes(router.pathname)

  return (
    <div style={{ width: "100%" }}>
      {/* {!isHiddenHeader && <LayoutHeader />} */}
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
      {/* <LayoutFooter /> */}
    </div>
  );
}
