import styled from "@emotion/styled";
const Wrapper = styled.div`
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
const TitleBar = styled.div`
    width: 996px;
    display: flex;
    justify-content: space-between;
`
const TitleBarLeft = styled.div`
`
const Profile = styled.div`
    font-size: 24px;
    font-weight: 500;
    background-color: orange;
`
const TitleBarRight = styled.div`
    width: 75px;
    height: 20px;
    background-color: red;
`
const Line = styled.div`
    width: 996px;
    margin: 20px 0 0 0;
    border-bottom: solid 1px #bdbdbd;
`
const Title = styled.div`
    width: 996px;
    margin-top: 80px;
    font-size: 36px;
    font-weight: bold;
`
const Content = styled.div`
    width: 996px;
    margin-top: 40px;
    font-size: 16px;
`
// import styled 했을 때 그 styled값을 한 파일에 같이 넣게 된다면 export를 적지 않아도 괜찮
// 그러나 styled 파일을 따로 분리해서 작업할 때는 ㅇㅇㅇ.styles.js파일에서는 export를 기입해줘야한다.



import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId:$boardId){
            writer
            title
            contents
        }
    }
`

export default function BoardDetailPage(){
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.newpage}
    })
    console.log(data)

    return (
        <Wrapper>
            <TitleBar>
                <TitleBarLeft>
                    <Profile>{data?.fetchBoard.writer}</Profile>
                </TitleBarLeft>
                <TitleBarRight>

                </TitleBarRight>
            </TitleBar>
            <Line></Line>
            <Title>{data?.fetchBoard.title}</Title>
            <Content>{data?.fetchBoard.content}</Content>
        </Wrapper>
    )
}