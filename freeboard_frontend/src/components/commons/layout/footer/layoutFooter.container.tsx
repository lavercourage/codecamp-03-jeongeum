import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #2c5f2d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyWrite = styled.span`
  font-size: 16px;
  color: #ffffff;
`;

const LayoutFooter = () => {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <CopyWrite>@ 2022 김정음</CopyWrite>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default LayoutFooter;
