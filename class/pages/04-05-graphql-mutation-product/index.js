import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
    mutation createProduct ($seller: String, $createProductInput: CreateProductInput!){
        createProduct(
            seller: $seller, 
            createProductInput: $createProductInput
        ){
            _id
            number
            message
        }
    }
`
// 준비완료

export default function GraphqlMutationProductPage() {
    const [ createProduct ] = useMutation(CREATE_PRODUCT)

    const [ pSeller, setPSeller ] = useState("")
    const [ pName, setPName ] = useState("")
    const [ pDetail, setPDetail ] = useState("")
    const [ pPrice, setPPrice ] = useState("")
    
    function onChangeSeller(event){
        setPSeller(event.target.value)
    }
    function onChangeName(event){
        setPName(event.target.value)
    }
    function onChangeDetail(event){
        setPDetail(event.target.value)
    }
    function onChangePrice(event){
        setPPrice(event.target.value)
    }


    async function onClickSubmit() {
        const result = await createProduct({
            variables: {
                seller: pSeller,
                createProductInput: {
                    name: pName,
                    detail: pDetail,
                    price: Number(pPrice)
                }
            }
        })
        console.log(result.data.createProduct._id)
    }

    return (
        <>
            판매자: <input type="text" onChange={onChangeSeller} /><br/>
            상품명: <input type="text" onChange={onChangeName}/><br/>
            상품상세: <input type="text" onChange={onChangeDetail}/><br/>
            상품가격: <input type="text" onChange={onChangePrice}/><br/>
            <button onClick={onClickSubmit}>상품 등록하기!</button>
        </>
    )
    //html에서의 숫자는 문자이지 숫자로 인식 x 1+1=1
    //js에서는 숫자는 숫자로 인식
}