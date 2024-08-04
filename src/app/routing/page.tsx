import Link from "next/link";

const Routing = () => {
  const randomNumber = Math.ceil(Math.random() * 10);

  return (
    <>
      <h2>기본 라우팅</h2>
      <ol>
        <li>app 이하 디렉토리를 생성(app/routing)</li>
        <li>해당 디렉토리에 page 파일을 생성</li>
      </ol>
      <h3>중첩 라우팅</h3>
      <Link href='/routing/nested-routes'>중첩 라우팅</Link>
      <h3>동적 라우팅 - 현재 난수: {randomNumber}</h3>
      <Link href={`/routing/${randomNumber}`}>동적 라우팅 {randomNumber}페이지</Link>
      <h3>프라이빗 폴더</h3>
      <Link href='/routing/private-folders'>프라이빗</Link>
      <h3>파일 공동 배치</h3>
      <Link href={'/routing/colocation'}>파일 공동 배치</Link>
    </>
  );
};

export default Routing;
