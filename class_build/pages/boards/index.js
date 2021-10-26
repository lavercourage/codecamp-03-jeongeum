import Head from "next/head";

export default function ExampleBoardPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나의 사이트 게시판페이지" />
        <meta property="og:description" content="환영합니다." />
        <meta
          property="og:image"
          content="http://www.newsmission.com/sharedata/photo_ckfinder/images/2019/07/pxhere.JPG"
        />
      </Head>
      <div>확인용 게시판 입니다.</div>
    </>
  );
}
