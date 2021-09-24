// console.log("Hello World!");

import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    fetchBoard: String!
  }
  type Mutation {
    createBoard: Int
  }
`;

const resolvers = {
  Query: {
    fetchBoard: () => {
      // 데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기(응답주기)
      return { writer: "철수", title: "제목" }; //하드코딩임
    },
  },
  Mutation: {
    createBoard: () => {
      // 데이터베이스에서 데이터 입력하기
      return { message: "성공했습니다.", number: 4 };
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
}).then(() => {
  // 연결성공시 실행
  console.log("접속완료! 야호!");
  server.listen({ port: 4000 });
  // server.listen()은 응답이 오기까지 계속 기다리겠다, 멈추지 않아!, 계속 대기중인 상태 <- 컴퓨터가 계속 켜져있어야함(정전, 접속끊어지면 안됨)
});
