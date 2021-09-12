import BoardWrite from "../../../../src/componentsanynameok/unit/board/write/BoardWrite.container"
import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($number:Int){
        fetchBoard(number:$number){
            writer
            title
            contents
        }
    }
`

export default function BoardEditPage(){
    const router = useRouter()
    
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })


    return(
        <BoardWrite isEdit={true} data={data}/>
    )
}


// 7. 리턴에 들어가야 할 컴포넌트는 그릴 필요가 없음. 왜냐하면 가져오면 되니까!!! (8.내용은 보드뉴 인덱스)

// 9. 여기도 보드라이트 넣는데 현 인덱스가 폴더에 더 쌓여있어서 몇 번 더 상위폴더로 올라갈 수도 있음 (10.내용은 보드뉴페이지인덱스)

// 11. 여기도 보드라이트 이즈에딧값을 트루로 설정 (12.내용은 보드라이트 컨테이너)

