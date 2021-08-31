export default function HelloLetPage(){ 
// 리턴기준 위는 js
    
    function zzz(){
        
        document.getElementById("aaa").innerText = "반갑습니다."

    }


    return (
        <button id="aaa" onClick={zzz}>안녕하세요.</button>
    )
// 리턴기준 아래는 html

}