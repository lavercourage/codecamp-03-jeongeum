import {useMutation, gql} from '@apollo/client'


const CREATE_BOARD = gql`
    mutation{
        createBoard(writer:"영희", title:"안녕하세요! 영희입니다.", contents:"내용"){
            number
            message
        }
    }
`
    // 준비과정1

export default function GraphqlMutationBoard1Page(){
    const [ createBoard ] = useMutation(CREATE_BOARD)

    async function aaa(){
        const result = await createBoard()
        // 준비과정2
        // 요청을하고 응답을 받음 7번의 number와 message
        console.log(result)
        // 전체적인 값을 불러옴
        console.log(result.data.createBoard.number)
        // GraphQl 특징상 원하는 정보만을 불러올 수 있는데, 새로만든 보드의 번호를 불러온 명령어
    }

    return(
        <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
    )
}