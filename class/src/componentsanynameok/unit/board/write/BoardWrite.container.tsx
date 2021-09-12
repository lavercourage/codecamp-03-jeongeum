import BoardWriteUI from "./BoardWrite.presenter";
import { useState } from "react";
// useState가 container에서 사용하고 있기 때문에 여기로 옮김
import { useMutation } from "@apollo/client";
// gql은 빼고 이동, gql은 BoardWrite.queries.js에 옮김
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";
// gql이 여기로 이동!
// babo!! import BoardWriteUI from "./BoardWrite.presenter"

export default function BoardWrite(props) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");

  const [ooo] = useState(false);
  // const [ooo, setOoo] = useState(true) set 써도 안써도 ㄱㅊ
  // useState()에서 그냥 글을 쓰는것과 ""를 이용해서 쓰는것의 차이는? boolean값으로 정하기 때문에 treu 또는 false 값을 꼭 적어줘야함!
  const [qqq, setQqq] = useState(false);

  // myWriter, myTitle, myContents 모두 내용이 저장되어있다면,
  // 즉, (myWriter !== "" && myTitle !== "" && myContetns !== "") 라면,
  // setQqq를 사용해서, false => true, 이모션의 버튼색을 노란색으로 변경하기

  function onChangeMyWriter(event) {
    setMyWriter(event.target.value);

    if (event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setQqq(true);
    }
  }

  function onChangeMyTitle(event) {
    setMyTitle(event.target.value);

    if (myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setQqq(true);
    }
  }

  function onChangeMyContents(event) {
    setMyContents(event.target.value);

    if (myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setQqq(true);
    }
  }

  // 123순서이던 213이던 312이던 암튼간에 순서 상관없이 빈칸이 채워지면 버튼의 색이 변하도록 설정하기위해서는
  // "물음표물음표" 해당값에 event.target.value 넣기 (기호 연달아쓰니 주석처리가 이상해짐)
  // event.target.value가 빈칸이 아니며, 나머지1도 빈칸이 아니며, 나머지2도 빈칸이 아니어야 작동 x 3 (myWriter, myTitle, myContents)

  async function aaa() {
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    console.log(result);
    console.log(result.data.createBoard.number);
    router.push(`/08-04-board-detail/${result.data.createBoard.number}`);
  }

  async function onClickEdit() {
    try {
      // 1. state의 초기값에도 defaultValue 를 넣어주는 방법
      // 2. 실제로 변경이 일어난 값만 수정하라고 Backend에 요청하는 방법  <= 효율적인 방법!
      const myVariables = {
        number: Number(router.query.number),
      };
      if (myWriter) {
        myVariables.writer = myWriter;
      }
      if (myTitle) {
        myVariables.title = myTitle;
      }
      if (myContents) {
        myVariables.contents = myContents;
      }
      // if문에서도 한줄로 표기가 가능하다면 중괄호 생략 가능

      await updateBoard({
        variables: myVariables,
      });
      router.push(`/08-04-board-detail/${router.query.number}`);
    } catch (error) {
      console.log(error);
    }

    // 업데이트보드를 하게된다면 기존 크리에이트의
  }
  return (
    <BoardWriteUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      aaa={aaa}
      ooo={ooo}
      qqq={qqq}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
      data={props.data}
    />
  );
  // 한줄일때는 괄호()생략가능
  // 두줄이상일때는 괄호() 필수
}

// 12. 프롭스로 보드라이트유아이를 받아온다.
// export default function BoardWrite(props){} 이렇게
// 그럼 isEdit이 들어있음 (상위 인덱스 파일들을 보면 디테일은 펄스 수정은 트루)
// 12-1. 하단의 리턴에서 isEdit={props.isEdit}으로 넣기
// 12-2. 그렇게 되면 부모 페이지에서 트루/ 펄스값에 따라 이 곳의 이즈 에딧 값도 정해짐? 아마도..?? (13.내용은 보드라이트프레젠터)

// 19. 상세페이지로 aaa기능을 통해 상세페이지로 이동시켜줘야함
// 19-1. 라우터를 이용해서 이동하므로 const router = useRouter() 만들어주고
// 19-2. import { useRouter} from "next/router" 가 있는지도 확인 (작동시켜야하니깐!)

// 19-2. 69번
// router.push(`/08-04-board-detail/${result.data.createBoard.number}`)
// 보드를 만들면 위 라우터 푸쉬로 상세페이지 이동

//               넘버/아이디값o  넘버/아이디값o
// 글쓰기페이지 ---> 상세페이지 ---> 수정페이지
//         글쓰기완료    수정하기버튼클릭
// BoardWrite:false            BoardWrite:true

// 20. 여기까지는 수정하기 창까지만 보임 / 내용을 입력해도 버튼을 누르면 수정된 페이지로 이동 x / 이제 이어줘야함!
// 20-1. 이제 업데이트보드(수정)를 하기위한 기능 만들기
// function onClickEdit(){}
// 그리고 위에 const [updateBoard ] = useMutation(UPDATE_BOARD) 만들기
// 해당 뮤테이션 값을 지정하기 위해 쿼리로 이동 (21.내용은 보드라이트쿼리)

// 22. 쿼리에서 가져와야하는 것은 CREATE_BOARD 와 UPDATE_BOARD 이므로
//     import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
//     넣어주기!
// 22-1. 물론 CREATE_BOARD, UPDATE_BOARD은 뮤테이션의 기본값(?)이니까
//       import { useMutation } from '@apollo/client'
//       요친구도 넣어주기

// 23. const [updateBoard]의 updateBoard를
//     async function onClickEdit(){}에 업데이트보드 실행시키기
//     베리어블즈를 만들고 안에 해당 스테이트(수정할 요소)를 넣어주기
//     변수명 : 해당하는 유즈스테이츠의 변수명

//     주의해야할점 : number인지 id인지 구분하고, number의 int 값이라면 Number로 감싸주기

//     보드가 업데이트 될때까지 기다려주기 = async, await
//     실패할수 도 있으니 try{} catch(error){} 하기

//     aaa도 try catch 할 수는 있음

// 24. router.push(`/08-04-board-detail/${router.query.number}`)
// 24-1. 해당 링크 앞에는 아이디나 넘버값이 있음 그렇기에 수정하기 페이지가 뜬거임 그래서 그 값을 가져와도 됨

// 25. onClickEdit을 하단 리턴의 보드라이트유아이에 넣어주고 활성화 시켜주기
// 25-1. onClickEdit을 프레젠터로 프롭스이용해서 넘겨줌 (26.내용은 보드라이트프레젠터)
