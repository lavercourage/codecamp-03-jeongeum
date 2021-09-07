export default function DynamicWriteUI(){

    return(

        <>
            작성자: <input type="text" onChange={onChangeMyWriter} /><br/>
            제목: <input type="text" onChange={onChangeMyTitle}/><br/>
            내용: <input type="text" onChange={onChangeMyContents}/><br/>
            <button onClick={aaa}>GRAPHQL-API 요청하기!!!</button>
        </>
        
    )

}