import Link from "next/link";

const RootNotFound = () => {
  return (
    <>
      <h2>페이지를 찾을 수 없습니다</h2>
      <Link href='/'>메인페이지로 바로가기</Link>
    </>
  );
};

export default RootNotFound;
