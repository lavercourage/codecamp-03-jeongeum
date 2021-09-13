import {useMutation, gql} from '@apollo/client'
import router, { useRouter } from 'next/router'
import { useState } from 'react'


const CREATE_BOARD = gql`
    mutation createBoard ($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents:$contents){
            number
            message
        }
    }
`


export default function DynamicBoardWrite(){


    return(
        
    )
}