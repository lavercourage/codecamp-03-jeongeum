import { MyButton, Title } from "./BoardWrite.styles"

export default function BoardWriteUI(props){

    return (
        <>
            <Title ooo={props.ooo}>컨테이너 프리젠터 패턴!</Title>
            작성자: <input type="text" onChange={props.onChangeMyWriter} /><br />
            제목: <input type="text" onChange={props.onChangeMyTitle} /><br />
            내용: <input type="text" onChange={props.onChangeMyContents} /><br />
            <MyButton onClick={props.aaa} qqq={props.qqq}>GRAPHQL-API 요청하기!!!</MyButton>
        </>
        // qqq가 true일때 빨간색 보이고 false일때 노란색 보임 = 설정은 BoardWrite.styles.js
    )
}

// onClick = key / props.aaa = value