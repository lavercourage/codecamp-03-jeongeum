






















import {useMutation, gql} from '@apollo/client'


const CREATE_BOARD = gql`
    mutation createBoard ($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents:$contents){
            number
            message
        }
    }
`

    // 언제든 백엔드로 요청할 준비완료
    // 아폴로 설명서에 있음

export default function GraphqlMutationBoard2Page(){
    const [ createBoard ] = useMutation(CREATE_BOARD)

    async function aaa(){
        const result = await createBoard({
            variables: {writer: "철수", title: "제목이에요.", contents: "악!!!"}
        })
        // variables : 변수
        // 준비과정2
        // await 했기때문에 기다림이 있음
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