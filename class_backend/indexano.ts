// console.log("Hello World!");

import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";

// 타입을 지정(playground)
const typeDefs = gql`
  input CreateBoardInputano {
    writer: String
    title: String
    age: Int
  }

  type Returnano {
    message: String
    number: Int
  }

  # type Query {
  #   fetchBoard: String!
  # }

  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoard: Board
    fetchBoards: [Board]
  }

  # type Mutation {
  #   createBoard: Int
  # }

  type Mutation {
    # createBoard(writer: String, title: String, age: Int): Returnano
    createBoard(createBoardInputanoano: CreateBoardInputano): Returnano
    updateBoard: Returnano
    deleteBoard: Returnano
  }
`;

// 실행되는 함수
const resolvers = {
  Query: {
    fetchBoard: async () => {
      // 데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기(응답주기)

      const result = await Board.findOne({
        where: { number: 2, deletedAt: null },
      });
      // result?.title;
      // result?.writer;
      // result?.age;

      // return { writer: "철수", title: "제목" }; //하드코딩임

      // return {
      //   title: result?.title,
      //   writer: result?.writer,
      //   age: result?.age,
      // };

      return result;
    },
    fetchBoards: async () => {
      const result = await Board.find({
        where: { deletedAt: null },
      });

      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터베이스에서 데이터 입력하기
      const result = await Board.insert({
        // title: "배가 아픕니다 흑흑",
        // writer: "배아픈 정음",
        // age: 25,
        // 하드코딩!

        // title: args.title,
        // writer: args.writer,
        // age: args.age,

        // title: args.createBoardInputanoano.title,
        // writer: args.createBoardInputanoano.writer,
        // age: args.createBoardInputanoano.age,

        ...args.createBoardInputanoano,
      });
      console.log(result);
      // return { message: "성공했습니다.", number: 4 }; // <- 하드코딩
      return {
        message: "당신은 곧 배가 안아파집니다.",
        number: result.identifiers[0].number,
      };
    },

    updateBoard: async (_: any, args: any) => {
      await Board.update({ number: 3 }, { writer: "배가 싹 나은 정음" }); // 앞 중괄호는 조건, 뒤 중괄호는 원하는 값
      return { message: "행복해하고 있습니다!!" };
    },

    deleteBoard: async () => {
      // await Board.delete({ number: 4 });
      await Board.update({ number: 5 }, { deletedAt: new Date() });
      return { message: "삭제완료!" };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5004,
  host: "34.64.221.225",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    // 연결성공시 실행
    console.log("접속완료! 야호!");
    server.listen({ port: 4000 });
    // server.listen()은 응답이 오기까지 계속 기다리겠다, 멈추지 않아!, 계속 대기중인 상태 <- 컴퓨터가 계속 켜져있어야함(정전, 접속끊어지면 안됨)
  })
  .catch((error) => {
    console.log(error);
  });
