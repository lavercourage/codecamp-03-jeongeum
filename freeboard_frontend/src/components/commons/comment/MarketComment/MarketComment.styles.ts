import styled from "@emotion/styled";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin-top: 40px;
  width: 1200px;
`;

export const TopTitle = styled.div`
  display: flex;
  align-items: center;
  /* margin-top: 40px; */
`;

export const CommentIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const CommentTitle = styled.span`
  font-size: 18px;
  margin-left: 14px;
`;

export const BottomTitle = styled.div`
  box-sizing: border-box;
  width: 1200px;
  height: 161px;
  margin-top: 20px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  :focus {
    outline: none;
  }
`;

export const BottomTitleUnder = styled.div`
  width: 1200px;
  height: 52px;
  margin: 0px;
  display: flex;
  border: 1px solid #bdbdbd;
  border-top: none;
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
  color: "#ffffff";
  background-color: "#000000";
`;
