import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String    ) {
        createBoard(writer: $writer, title: $title, contents: $contents){
            number
            # message
        }
    }
`

export const UPDATE_BOARD = gql`
    mutation updateBoard($number:Int, $writer: String, $title: String, $contents: String    ) {
        updateBoard(number: $number, writer: $writer, title: $title, contents: $contents){
            number
            # message
        }
    }
`

// 21. playground보고 해당하는 값들 적어넣으면 됨
// 21-1. 수정하기 기능을 하기위해서는 해당글의 아이디나 넘버값이 필요함! (필수!) 넣어주기 (22.내용은 보드라이트컨테이너)