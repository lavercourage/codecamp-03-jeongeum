import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: orange;

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: purple;
    display: none;
  }
`;

const ResponsiveDesignPage = () => {
  return (
    <>
      <Wrapper>상자</Wrapper>
    </>
  );
};

export default ResponsiveDesignPage;
