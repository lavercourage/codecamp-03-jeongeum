import styled from "@emotion/styled";
export const Wrapper = styled.div`
    width: 1200px;
    margin: 120px;
    padding: 80px 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0 4px 20px gray;
    /* background-color: beige; */
`
export const TitleBar = styled.div`
    width: 996px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const TitleBarLeft = styled.div`
    display: flex;
`
export const Profile = styled.div`
    font-size: 24px;
    font-weight: 500;
`
export const CreateDt = styled.div`
    font-size: 16px;
    color: #828282;
`
export const TitleBarRight = styled.div`
    display: flex;
`
export const Clip = styled.img`
    width: 26px;
`
export const Location = styled.img`
    height: 26px;
    margin-left: 20px;
`

export const Line = styled.div`
    width: 996px;
    margin: 20px 0 0 0;
    border-bottom: solid 1px #bdbdbd;
`
export const Title = styled.div`
    width: 996px;
    margin-top: 80px;
    font-size: 36px;
    font-weight: bold;
`
export const Content = styled.div`
    width: 996px;
    margin-top: 40px;
    font-size: 16px;
`
export const ProfileImg = styled.img`
    width: 48px;
    height: 48px;
`
export const ProfileData = styled.div`
    margin-left: 16px;
`

export const MainImg = styled.img`
    width: 996px;
    margin-top: 40px;
`



// import styled 했을 때 그 styled값을 한 파일에 같이 넣게 된다면 export를 적지 않아도 괜찮
// 그러나 styled 파일을 따로 분리해서 작업할 때는 ㅇㅇㅇ.styles.js파일에서는 export를 기입해줘야한다.