import Link from "next/link";

const Routing = () => {
  return (
    <>
      <h2>기본 라우팅</h2>
      <ol>
        <li>app 이하 디렉토리를 생성(app/routing)</li>
        <li>해당 디렉토리에 page 파일을 생성</li>
      </ol>
      <Link href='/routing/nested-routes'>중첩 라우팅</Link>
    </>
  );
};

export default Routing;
