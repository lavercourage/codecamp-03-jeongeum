import {
  List,
  Row2,
  Number,
  Title,
  Writer,
  UpDate,
  Row,
  ColumnNumber,
  ColumnTitle,
  TextToken,
  ColumnWriter,
  ColumnUpDate,
  ListBottom,
  Button,
  ButtonImg,
  Pagination,
  PageButton,
  Page,
} from "./ListBoard.styles";
import SearchBarBoard from "../../../commons/searchbar/searchbar.container";
import { v4 as uuidv4 } from "uuid";

export default function ListBoardUI(props: any) {
  return (
    <>
      <SearchBarBoard
        refech={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
      />
      <List>
        <Row2>
          <Number>번호</Number>
          <Title>제목</Title>
          <Writer>작성자</Writer>
          <UpDate>작성일</UpDate>
        </Row2>
        {props.data?.fetchBoards.map((el: any, index: any) => (
          <Row
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToDetailBoard}
          >
            <ColumnNumber>{index + 1}</ColumnNumber>
            {/* <ColumnTitle id={el._id}>{el.title}</ColumnTitle> */}

            <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
              {el.title
                .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </TextToken>
                ))}
            </ColumnTitle>

            <ColumnWriter>{el.writer}</ColumnWriter>
            <ColumnUpDate>{el.createdAt.slice(0, 10)}</ColumnUpDate>
          </Row>
        ))}
        <ListBottom>
          <Pagination>
            {/* <div>
              {props.data?.fetchBoards.map((el: any) => (
                <div key={el._id}>{el.title}</div>
              ))}
            </div>
            <br /> */}
            <PageButton
              onClick={props.onClickBeforePage}
              src="/image/board/list/ic_navigate_before-24px.svg"
            />
            {new Array(10).fill(1).map(
              (_, index) =>
                props.startPage + index <= props.lastPage && (
                  <Page
                    key={props.startPage + index}
                    // key는 map을 쓸 때 사용하는 규칙 (고유값이 들어감)
                    onClick={props.onClickMovePage}
                    id={String(props.startPage + index)}
                    isActive={props.startPage + index === props.activePage}
                  >
                    {props.startPage + index}
                  </Page>
                )
            )}
            <PageButton
              onClick={props.onClickNextPage}
              src="/image/board/list/ic_navigate_next-24px.svg"
            />
          </Pagination>
          <Button onClick={props.onClickMoveToCreateBoard}>
            <ButtonImg src="/image/board/list/ic_create-24px.svg" />
            게시글 등록하기
          </Button>
        </ListBottom>
      </List>
    </>
  );
}
