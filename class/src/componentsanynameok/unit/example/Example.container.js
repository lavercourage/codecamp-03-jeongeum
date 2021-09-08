import ExampleUI from "./Example.presenter"

export default function Example(props){

    return(
        <ExampleUI isEdit={props.isEdit}/>
    )
}



// 1. import로 exampleui 가져오 + 리턴에도 넣어주기 (2.내용 뉴페이지이그잼플)

// 7. example(props)로 받아주고, exampleui에 isedit넣고 그걸 프롭스 이즈에딧으로 넣어준다 저 이즈에딧은 전달자역할
// 7-1. 컨테이너 이그잼플유아이에서 넘겨준 트루 펄스값을 프레젠터 이그잼플 유아이가 받아주므로 ~ (프레젠터에서 이어설명)