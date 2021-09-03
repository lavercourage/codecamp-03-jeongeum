import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    #graphql의 주석은 #!!!!!!
    query fetchBoard($number: Int){
        fetchBoard(number:$number){
            writer
            title
            contents
        }
    }
`


export default function DynamicBoardRead (){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.number)}
    }) 
    console.log(data)
    // mutation은 원할때만 받을 수 있는데 fetch는 화면이 작동할때 보여줌 => 페이지가 열리자마자 요청넣음
    // fetch보드를 작동시킬때 보여줘야하므로 FETCH_BOARD에 
    // async await m= 등록완료될때까지 기다림
    // 백엔드 정보 요청하고 return을 먼저 그림을 그림
    // 만약 async await을 설정하게 된다면 빈화면이었다가 내용이 보임
    // 사용을 안하면 일단 return은 보이되, 내용이 나중에 보임
    // 문자열이라서 숫자로 표현하기 위해 Number()사용

    return (
        <>
            <div>게시물 상세 페이지입니다!</div>
            <div>게시물 번호: {router.query.number}</div>
            <div>게시물 작성자: {data?.fetchBoard.writer} </div>
            <div>게시물 제목: {data?.fetchBoard.title}</div>
            <div>게시물 내용: {data?.fetchBoard.contents}</div>

            {/* <div>게시물 작성자: {data && data.fetchBoard.writer : "loading..."} </div> */}
            {/* <div>게시물 제목: {data && data.fetchBoard.title : "loading..."}</div> */}
            {/* <div>게시물 내용: {data && data.fetchBoard.contents : "loading..."}</div> */}

            {/* <div>게시물 작성자: {data ? data.fetchBoard.writer : "loading..."} </div> */}
            {/* <div>게시물 제목: {data ? data.fetchBoard.title : "loading..."}</div> */}
            {/* <div>게시물 내용: {data ? data.fetchBoard.contents : "loading..."}</div> */}

            {/* data && data.~ /data가 있으면 실행 없으면 실행 x, 데이터가 있으면 로딩까지 시간이 걸림    && 연산자*/}
            {/* data ? data ~ : "comment" /데이터를 불러오기 전까지 기본틀은 보임, comment에 내용을 넣어두면 정보가 불려오기 전까지 떠있음    삼항 연산자*/}
            {/* data ?.~ === data && data.~ 같음 /뒤에 data.가 더 붙느냐 아니냐 확인하기!    옵셔널 체이닝*/}
        </>

    )
}