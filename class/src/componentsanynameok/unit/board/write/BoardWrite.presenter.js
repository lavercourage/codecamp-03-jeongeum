 import { MyButton, Title } from "./BoardWrite.styles"

export default function BoardWriteUI(props){

    return (
        <>
            <h1>{props.isEdit ? "수정페이지" : "등록페이지"}</h1>
            <Title ooo={props.ooo}>컨테이너 프리젠터 패턴!</Title>
            작성자: <input type="text" onChange={props.onChangeMyWriter} /><br />
            제목: <input type="text" onChange={props.onChangeMyTitle} /><br />
            내용: <input type="text" onChange={props.onChangeMyContents} /><br />
            {/* <MyButton onClick={props.aaa} qqq={props.qqq}>GRAPHQL-API 요청하기!!!</MyButton> */}
            {!props.isEdit && <MyButton onClick={props.aaa} qqq={props.qqq}>등록하기</MyButton>}
            {props.isEdit && <MyButton onClick={props.onClickEdit} qqq={props.qqq}>수정하기</MyButton>}
        </> 
        // qqq가 true일때 빨간색 보이고 false일때 노란색 보임 = 설정은 BoardWrite.styles.js
    )
}

// onClick = key / props.aaa = value


// 13. <h1>을 통해 이즈에딧값에 따라 수정페이지인지 등록페이지인지 나타내준다.
// 이 프레젠터는 컨테이너의 자식이므로 컨테이너의 값의 따라 프레젠터의 값도 바뀜
// 마이버튼, 온클릭 프롭스aaa는 컨테이너의 보드만들기 요청부분 api(playground)
// 기존내용 보존하고 싶어서 주석처리했음

// 13-1. 버튼을 눌러 글을 등록하던지 수정해야하므로 버튼 2개

// 14. {!props.isEdit && <MyButton onClick={props.aaa} qqq={props.qqq}>등록하기</MyButton>}
// 14-1. 프롭스 에딧값이 트루가 아님과 동시에 (!사용했으므로 반대) 버튼을 누르면 aaa 실행

// 15. {props.isEdit && <MyButton onClick={props.onClickEdit} qqq={props.qqq}>수정하기</MyButton>}
// 15-1. 프롭스 에딧값이 트루일때 버튼을 누르면 aaa 실행
// 15-2. 그치만 수정하기 버튼을 누르면 수정하기 뮤테이션이 담긴 기능으로 바꿔줘야함 (아마도 업데이트보드일듯?// )
// (16.내용은  08-04의 인덱스폴더 / [number]의 인덱스 아님)

// 26. 수정하기 버튼을 눌렀을 때 작동하기 위해서는 컨테이너에서 지정해준 수정하기 기능이 있는 기능명을 적어넣어줘야함!
//     그게 바로 onClickEdit 임!