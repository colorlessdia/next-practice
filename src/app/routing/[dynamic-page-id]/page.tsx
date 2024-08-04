import { Metadata } from "next";

// 동적 metadata
export const generateMetadata = ({params}: {
  params: {
    'dynamic-page-id': string;
  };
}): Metadata => {
  return {
    title: `Dynamic ${params['dynamic-page-id']} metadata`,
    description: `page${params['dynamic-page-id']}`,
  };
};

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