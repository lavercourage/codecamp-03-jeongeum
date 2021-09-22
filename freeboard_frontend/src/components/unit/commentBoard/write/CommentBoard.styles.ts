// import { Rate } from "antd";

// export const Star = styled(Rate)``;

import styled from "@emotion/styled";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin: 87px;
  width: 1200px;
`;
export const Border = styled.div`
  width: 1200px;
  border-top: 1px solid #bdbdbd;
`;
export const TopTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;
export const CommentIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const CommentTitle = styled.span`
  font-size: 18px;
  margin-left: 14px;
`;
export const MiddelTitle = styled.div`
  display: flex;
  align-items: center;
  padding-top: 40px;
`;
export const Writer = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  /* text-align: center; */
  font-size: 16px;
  color: black;
  border: 1px solid #bdbdbd;
`;
export const Password = styled.input`
  width: 180px;
  height: 52px;
  margin-left: 24px;
  padding-left: 20px;
  font-size: 16px;
  color: black;
  border: 1px solid #bdbdbd;
`;

export const BottomTitle = styled.div`
  box-sizing: border-box;
  width: 1200px;
  height: 161px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  align-items: center;
`;

export const Content = styled.textarea`
  width: 1200px;
  min-height: 108px;
  resize: none;
  font-size: 16px;
  padding-left: 20px;
  padding: 20px 20px 0px 20px;
  border: none;
  border-bottom: 1px solid #f2f2f2;
  z-index: -1;
`;

export const BottomTitleUnder = styled.div`
  width: 1200px;
  height: 52px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Textlength = styled.div`
  margin-left: 20px;
  color: #bdbdbd;
  font-size: 13px;
`;

export const Button = styled.button`
  width: 91px;
  height: 51px;
  border: none;
  font-size: 16px;
  color: white;
  background-color: black;
  margin-right: 1px;
  /* z-index: -1; */
`;

// export const SubmitCancle = styled.button`
//   width: 179px;
//   height: 52px;
//   /* background-color: ${(props) =>
//     props.qqq === true ? "#FFD600" : "#bdbdbd"}; */
//   background-color: #bdbdbd;
//   border: none;
//   font-size: 16px;
//   font-weight: 500;
//   margin: 0 12px 0 12px;
//   padding: 0;
//   /* cursor: ${(props) => (props.isActive ? "pointer" : "default")}; */
//   cursor: pointer;
// `;
