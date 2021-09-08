import styled from "@emotion/styled";
export const Wrapper = styled.div`
    width: 1200px;
    /* height: 1847px; */
    margin: 120px;
    padding: 80px 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0 4px 20px gray;
    /* background-color: beige; */
`
export const Title = styled.div`
    width: 174px;
    height: 53px;
    font-size: 36px;
    padding: 8.5px 0 0 0;
    text-align: center;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: bold;
    color: #000000;
`
export const Section1 = styled.div`
    width: 996px;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
`
export const SecLeft = styled.div`
    /* width: 486px;
    display: flex;
    flex-direction: column; */
`
export const SecLTop = styled.div`
    display: flex;    
`
export const Label = styled.div`
    height: 24px;
    margin-right: 4px;
    padding: 4px 0 0 0;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
`
export const Label2 = styled.div`
    width: 8px;
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #FFD600;
`
export const Writer = styled.input`
    width: 486px;
    height: 52px;
    font-size: 16px;
    margin: 16px 0 0 0;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
export const SecRight = styled.div`

`
export const Password = styled.input`
    width: 486px;
    height: 52px;
    font-size: 16px;
    margin: 16px 0 0 0;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
export const Section2 = styled.div`
    margin-top: 40px;
`
export const Topic = styled.input`
    width: 996px;
    height: 52px;
    font-size: 16px;
    margin: 16px 0 0 0;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
export const Section3 = styled.div`
    margin-top: 40px;
`
export const Substance = styled.textarea`
    width: 996px;
    height: 480px;
    resize: none;
    font-size: 16px;
    margin: 16px 0 0 0;
    padding: 14px 0 0 16px;
    border: 1px solid #bdbdbd;
    /* color: red; */
`
export const Section4 = styled.div`
    margin-top: 16px;
`
export const Address = styled.div`
`
export const Address1 = styled.div`
    display: flex;
    align-items: flex-end;
`
export const Postnum = styled.input`
    width: 77px;
    height: 52px;
    font-size: 16px;
    margin: 16px 0 0 0;
    padding-left: 16px;
    border: 1px solid #BDBDBD;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
export const Button = styled.button`
    width: 124px;
    height: 52px;
    margin-left: 16px;
    font-size: 16px;
    color: white;
    background-color: black; 
`
export const Address2 = styled.input`
    width: 996px;
    height: 52px;
    margin-top: 16px;
    padding-left: 16px;
    font-size: 16px;
    border: 1px solid #BDBDBD;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
export const Section5 = styled.div`
    margin-top: 40px;
`
export const Address3 = styled.input`
    width: 996px;
    height: 52px;
    margin-top: 16px;
    padding-left: 16px;
    font-size: 16px;
    border: 1px solid #BDBDBD;
    ::-webkit-input-placeholder{color: #BDBDBD;}
`
export const Section6 = styled.div`
    width: 996px;
    margin-top: 40px;
    /* display: flex;
    flex-direction: column; */
`
export const Upload = styled.div`
    display: flex;
`
export const Plusimg = styled.div`
    width: 78px;
    height: 78px;
    margin-top: 16px;
    margin-right: 24px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #BDBDBD;
`
export const Plus = styled.img`
    width: 14px;
    height: 14px;
    /* background-color: #4f4f4f; */
`
export const Upload2 = styled.div`
    font-family: Noto Sans CJK KR;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    margin-top: 5px;
`
export const Section7 = styled.div`
    width: 996px;
    margin-top: 40px;
`
export const Select = styled.div`
    margin-top: 18px;
    display: flex;
    align-items: center;
`
export const RadioBt = styled.input`
    width: 20px;
    height: 20px;
    margin: 0px;
    color: #FFD600;
    cursor: pointer;
`
export const RadioName = styled.label`
    margin-left: 10px;
    margin-right: 22px;
    font-size: 16px;
`
export const Section8 = styled.div`
    margin-top: 82px;
`
// export const Cancle = styled.button`
//     width: 179px;
// 	height: 52px;
// 	background-color: #bdbdbd;
// 	border: none;
// 	font-size: 16px;
// 	font-weight: 500;
//     padding: 0;
// 	cursor: pointer;
// 	:hover {
// 		background-color: #8B0000;
//         color: white;
//     }
// `
export const Submit = styled.button`
    width: 179px;
	height: 52px;
    background-color: ${(props) => (props.qqq === true ? "#FFD600" : "#bdbdbd")};
	/* background-color: #FFD600; */
	border: none;
	font-size: 16px;
	font-weight: 500;
    padding: 0;
    /* cursor: ${(props) => props.isActive ? "pointer" : "default"}; */
	cursor: pointer;

`
export const Error = styled.div`
    margin-top: 12px;
    font-size: 16px;
    color: #8B0000;
`