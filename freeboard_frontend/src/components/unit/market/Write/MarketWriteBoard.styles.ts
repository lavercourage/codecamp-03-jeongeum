import styled from "@emotion/styled";

export const Wrapper = styled.form`
  width: 100%;
  margin: 120px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0 4px 20px gray;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #000000;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const Map = styled.div`
  width: 996px;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const LocationLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.div`
  font-size: 16px;
  color: #000000;
`;

export const LocationMap = styled.div`
  width: 384px;
  height: 252px;
  margin-top: 16px;
  background-color: #888888;
`;

export const LocationRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-top: 16px;
`;

export const LoInput = styled.input`
  width: 108px;
  height: 52px;
  color: #000000;
  font-size: 16px;
  text-align: center;
  /* padding-left: 16px; */
  border: 1px solid #bdbdbd;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #4f4f4f;
    text-align: center;
  }
`;

export const LoImg = styled.img`
  /* width: 14px; */
  /* height: 20px; */
  height: 30px;
  padding: 0 20px;
`;

export const LoBottom = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoInput2 = styled.input`
  width: 588px;
  height: 52px;
  color: #000000;
  font-size: 16px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  :focus {
    outline: none;
  }
  /* ::-webkit-input-placeholder {
    color: #4f4f4f;
    text-align: center;
  } */
`;

export const AddPhoto = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Photos = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const Images = styled.div`
  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
  margin-right: 24px;
`;

export const MainSetting = styled.div`
  width: 996px;
  margin-top: 40px;
`;

export const Select = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
`;

export const RadioBt = styled.input`
  width: 20px;
  height: 20px;
  margin: 0px;
  color: #ffd600;
  cursor: pointer;
`;
export const RadioName = styled.label`
  margin-left: 10px;
  margin-right: 22px;
  font-size: 16px;
`;

export const Button1 = styled.div`
  display: flex;
`;

export const CancleButton = styled.button`
  width: 179px;
  height: 52px;
  margin-top: 80px;
  margin-right: 24px;
  border: none;
  color: #4f4f4f;
  background-color: #bdbdbd;
`;
