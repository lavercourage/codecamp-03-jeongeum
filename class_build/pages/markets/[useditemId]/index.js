import Head from "next/head";
import { gql, request } from "graphql-request";

export default function MarketsPage(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}
        />
      </Head>
      <div>마켓페이지입니다.</div>
    </>
  );
}

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

// 페이지 안에만 적을 수 있음
// getServerSideProps 내장된 이름 -> 변경 불가능
export const getServerSideProps = async (context) => {
  // 1. graphQL 데이터를 요청한다
  const result = await request(
    "https://backend03.codebootcamp.co.kr/graphql",
    // "https://backend03.codebootcamp.co.kr/graphql01",  // https://botanistsroom.shop 배포할때 사용
    FETCH_USED_ITEM,
    {
      useditemId: context.query.useditemId,
    }
  );
  // 2. 요청받은 데이터를 페이지로 넘겨준다
  return {
    props: {
      fetchUseditem: result.fetchUseditem,
    },
  };
};
