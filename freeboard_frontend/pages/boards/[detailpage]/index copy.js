import {
    Wrapper, TitleBar, TitleBarLeft, Profile, TitleBarRight, Line, Title, Content, MainImg, ProfileImg, ProfileData, CreateDt, Clip, Location
} from "../../../styles/BoardsDetail.styles"

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router"
import { Upload } from "../../../styles/BoardsNew.styles";

const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
        fetchBoard(boardId:$boardId){
            writer
            title
            contents
            createdAt
        }
    }
`

export default function BoardDetailPage(){
    const router = useRouter()

    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.detailpage}
    })
    console.log(data)

    return (
        <Wrapper>
            <TitleBar>
                <TitleBarLeft>
                    <ProfileImg src="/image/ProfileVector.svg" />
                    <ProfileData>
                        <Profile>{data?.fetchBoard.writer}</Profile>
                        <CreateDt>{data?.fetchBoard.createdAt}</CreateDt>
                    </ProfileData>
                </TitleBarLeft>
                <TitleBarRight>
                    <Clip src="/image/ic_link-32px.svg"/>
                    <Location src="/image/ic_location_on-32px.svg"/>
                </TitleBarRight>
            </TitleBar>
            <Line></Line>
            <Title>{data?.fetchBoard.title}</Title>
            <MainImg src="/image/image.png" />

            <Content>{data?.fetchBoard.contents}</Content>
        </Wrapper>
    )
}