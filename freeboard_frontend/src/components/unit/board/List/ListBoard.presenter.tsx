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
  ColumnWriter,
  ColumnUpDate,
  ListBottom,
  Button,
  ButtonImg,
  Pagination,
  Page,
} from "./ListBoard.styles";

export default function ListBoardUI(props) {
  return (
    <>
      <List>
        <Row2>
          <Number>번호</Number>
          <Title>제목</Title>
          <Writer>작성자</Writer>
          <UpDate>작성일</UpDate>
        </Row2>
        {props.data?.fetchBoards.map((el: any, index: any) => (
          <Row key={el._id}>
            <ColumnNumber>{index + 1}</ColumnNumber>
            <ColumnTitle id={el._id} onClick={props.onClickMoveToDetailBoard}>
              {el.title}
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el: any) => (
              <Page key={el} onClick={props.onClickMovePage} id={String(el)}>
                {el}
              </Page>
            ))}
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
