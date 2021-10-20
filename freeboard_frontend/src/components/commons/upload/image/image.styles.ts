import styled from "@emotion/styled";

export const ImageInputFunctionButton = styled.div`
  width: 180px;
  height: 180px;
  font-size: 60px;
  padding-top: 40px;
  text-align: center;
  background-color: #bdbdbd;
  margin-right: 24px;
`;

export const ImageInputButton = styled.input`
  display: none;
`;

export const ImagePreview = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 24px;
  /* object-fit: cover; */
  /* overflow: visible; 이게 디폴트값 */
  /* overflow: hidden; */
`;
