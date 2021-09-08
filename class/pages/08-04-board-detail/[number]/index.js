import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number:$number){
            writer
            title
            contents
            number
        }
    }
`


export default function BoardDetailPage(){
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
    
    function onClickMoveToEdit(){
        router.push(`/08-04-board-detail/${router.query.number}/edit`)
    }

    return (
        <>
            <div>게시물 상세 페이지입니다!</div>
            <div>게시물 번호: {router.query.number}</div>
            <div>게시물 작성자: {data?.fetchBoard.writer} </div>
            <div>게시물 제목: {data?.fetchBoard.title}</div>
            <div>게시물 내용: {data?.fetchBoard.contents}</div>

            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>

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


// 3. const FETCH_BOARD = gql`
//     query fetchBoard($number: Int){
//         fetchBoard(number:$number){
//             writer
//             title
//             contents
//         }
//     }
// `
// 여기는 디테일페이지 = 결과값이 있는 페이지이기 때문에
// id 또는 number 값도 같이 불러와줘야한다. writer title contents + number

// 3-2. 그리고 동적라우팅을 위해 08-04에 [number] 폴더 생성
//      저 이름은 다른걸로도 설정가능
//      해당하는 number가 쓰이는 곳은
//      베리어블즈에서 라우터.쿼리.넘버 이곳임
//      variables: {number: Number(router.query.number)}
//      1. number는 패치보드의 writer, title, contents, number 여기에 있는 그 넘버
//      2. Number(~) 괄호 안에 있는 값을 숫자로 표현하기 위함
//      3. number [number] 라우팅을 위한 폴더명

// 4. 게시글 상세보기 페이지에서 수정하러 이동하기 버튼을 생성
// 4-1. 클릭기능 넣고(onClick) onClickMoveToEdit 이라고 짓기

// 5. 버튼을 눌렀을 때의 기능을 구현하기 위해 function onClickMoveToEdit(){} 만들어주기
// 5-1. 버튼을 눌렀을 때 페이지가 이동하므로 라우팅 해줘야함
//      버튼 누름 -> 온클릭기능으로 실행 -> 라우팅푸쉬로 해당 페이지 이동
//      해당 넘버?? 글넘버??가 있어야 하므로 [number] 폴더 등장!!

// 6. 넘버/아이디가 지정된 디테일 페이지에서 수정된 페이지로 이동해야하므로 (수정하려는 페이지도 넘버/아이디 값이 필요함)
// 6-1. [number] 폴더 하위에 edit 폴더를 생성하고 인덱스 파일 만들기 (7.내용은 [넘버] 에딧 인덱스파일로)

// 16. function onClickMoveToEdit(){
// router.push()
// }
// 푸쉬안에 08-04/[number]로 이동하고 edit(수정페이지)으로 이동

// 17. function onClickMoveToEdit(){
//     router.push(`/08-04-board-detail/${router.query.number}/edit`)
// }
// onClickMoveToEdit을 실행했을 때 라우터푸쉬해준다(=페이지 이동)
// 어디로? ~~주소/08-04~/ 해당글번호 또는 아이디 값(해당보드의 지정값) / edit

// 18. 등록하면록 -> 상세페이지 -> 수정하기이동 버튼 -> 수정페이지 (19.내용은 보드라이트컨테이너)

// 19, 31 number 정체 밝히기