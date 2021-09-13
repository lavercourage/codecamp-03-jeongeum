import { gql, useMutation, useQuery } from "@apollo/client"


export default function DeleteBoard(){

    return(
        <div>
            <div><input type="checkbox"/></div>
            <div>{index}</div>
            <div>title</div>
            <div>contents</div>
            <div>createdAt</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    )
}
