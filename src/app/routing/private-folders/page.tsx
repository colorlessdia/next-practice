import Link from "next/link";

const PrivateFolders = () => {
  return (
    <>
      <h2>라우팅 되지 않는 폴더 생성</h2>
      <ol>
        <li>_(언더스코어) 접두사로 생성</li>
        <li>해당 폴더 내부에 page 파일이 존재하여도 라우팅되지 않는다</li>
      </ol>
      <Link href='/routing/private-folders/_private-routes'>_private-routes(라우팅 되지 않는 경로)</Link>
      <h3>경로에 _ 문자를 사용하고 싶은 경우</h3>
      <ol>
        <li>폴더명에 %5F 접두사를 사용 %5Fescape-private-routes</li>
        <li>경로를 지정할 때 언더스코어로 지정 /_escape-private-routes</li>
      </ol>
      <Link href='/routing/private-folders/_escape-private-routes'>_escape-private-routes</Link>
    </>
  );
};

export default PrivateFolders;
