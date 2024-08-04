type DynamicRoutesProps = {
  params: {
    'dynamic-page-id': string;
  };
};

const DynamicRoutes = ({ params }: DynamicRoutesProps) => {
  const pageId = params["dynamic-page-id"];

  return (
    <>
      <h2>동적 라우팅 {pageId}페이지</h2>
      <ol>
        <li>디렉토리 이름을 [dynamic] 형태로 생성</li>
        <li>해당 디렉토리에 page 파일을 생성</li>
        <li>params props를 통해 dynamic 값을 사용</li>
      </ol>
    </>
  );
};

export default DynamicRoutes;