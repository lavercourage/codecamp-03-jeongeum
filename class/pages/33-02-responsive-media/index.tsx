import styled from "@emotion/styled";
import { breakPoint } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: #ff6c84;

  /* @media (min-width: 768px) and (max-width: 1199px) {
    width: 500px;
    height: 500px;
    background-color: #ddbca0;
  } */

  @media ${breakPoint.tablet} {
    width: 500px;
    height: 500px;
    background-color: #ff7700;
  }

  /* @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: #5656ff;
  } */

  @media ${breakPoint.mobile} {
    width: 100px;
    height: 100px;
    background-color: #5656ff;
    /* display: none; */
  }
`;

export default function ResponsiveMediaPage() {
  return (
    <>
      <Wrapper>r</Wrapper>
    </>
  );
}
