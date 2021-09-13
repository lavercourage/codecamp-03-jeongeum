import { gql, useMutation, useQuery } from "@apollo/client"
import styled from "@emotion/styled"


const FETCH_BOARDS = gql`
    query{
        fetchBoards{
            number
            writer
            title
            contents
            createdAt
        }
    }
`
// 쿼리 작성법 다시 한번만 더 확인

const Row = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid orange;
`
const Column = styled.div`
    width: 20%;
`
// const Table = styled.div``
// trtd? 로 만들려면 만드는것이 어렵고 유지보수도 어렵다

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`
// 하드코딩 x, 세팅만 완료



export default function MapSelectorPage(){
    const [deleteBoardano] = useMutation(DELETE_BOARD)
    const { data } = useQuery(FETCH_BOARDS)

    async function onClickDelete(event){
        await deleteBoardano({
            variables: {number:Number(event.target.id)},
            refetchQueries : [{ query: FETCH_BOARDS }]
        })
    }

    return(
        <div>
            {data?.fetchBoards.map((el, index) => (
                <Row key={el.number}>
                {/* key는 완전히 독립적인 것으로 할당 해야함! */}
                    <Column>
                        <input type="checkbox" />
                    </Column>
                    <Column>{index}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.createdAt}</Column>
                    <Column>
                        <button id={el.number} onClick={onClickDelete}>삭제하기</button>
                    </Column>
                </Row>
            ))}
        </div>
    )
}