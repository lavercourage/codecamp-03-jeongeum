import styled from '@emotion/styled'

interface IButtonProps {
    qqq: boolean
}

export const MyButton = styled.button`
    /* background-color: gray; */
    background-color: ${(props: IButtonProps)=>(props.qqq === true ? 'blue' : 'gray')};
`
//함수가 없기 때문에 함수를 강제로 만듦




interface ITitleProps {
    ooo: boolean
}

export const Title = styled.h1`
    color: ${(props: ITitleProps)=>(props.ooo === true ? 'red' : 'green')};
`
// 체크해봐야할 부분 1  ${() => ()};
// 체크해봐야할 부분 2 ( === a ? 'aa' : 'bb')
// 의미 확인해보기