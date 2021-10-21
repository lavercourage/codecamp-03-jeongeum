import axios from "axios";

export default function GraphQLRestPage() {
  const onClickRequest = async () => {
    const result = await axios.post(
      "http://backend03.codebootcamp.co.kr/graphql",
      {
        query: `
                mutation createBoard {
                    createBoard(
                        createBoardInput: {
                            writer: "삵아지",
                            password: "7777",
                            title: "제목",
                            contents: "내용"
                        }
                    ){
                        _id
                        writer
                    }
                }
            `,
      }
    );
    console.log(result);
  };

  return (
    <button onClick={onClickRequest}>
      클릭해서 GraphQL을 Axios로 요청하기!
    </button>
  );
}
