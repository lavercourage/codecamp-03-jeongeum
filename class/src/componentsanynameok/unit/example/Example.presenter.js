export default function ExampleUI(props){

    return(
        <>
            {/* <div>OO페이지</div> */}
            <div>{props.isEdit ? "수정페이지" : "등록페이지"}</div>
            제목: <input type="text" /> <br/>
            내용: <input type="text" /> <br/>
            <button>{props.isEdit ? "수정하기" : "등록하기"}</button>
        </>

    )
}