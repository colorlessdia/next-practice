import { Metadata } from "next";

export const metadata: Metadata  = {
  title: {
    absolute: 'catch-all-segment metadata'
  }
};

type CatchAllSegmentsProps = {
  params: {
    slug: string[];
  };
};

const CatchAllSegments = ({ params }: CatchAllSegmentsProps) => {
  const { slug } = params;

  const formattedPath = (slugList: string[]): string => {
    return '/catch-all-segments/' + slugList.join('/');
  };

  if (slug?.length === 3) {
    return (
      <>
        <h2>{slug[slug.length - 1]} 페이지</h2>
        <h3>slug length: {slug.length}</h3>
        <p>path: {formattedPath(slug)}</p>
      </>
    );
  } else if (slug?.length === 2) {
    return (
      <>
        <h2>{slug[slug.length - 1]} 페이지</h2>
        <h3>slug length: {slug.length}</h3>
        <p>path: {formattedPath(slug)}</p>
      </>
    );
  } else if (slug?.length === 1) {
    return (
      <>
        <h2>{slug[slug.length - 1]} 페이지</h2>
        <h3>slug length: {slug.length}</h3>
        <p>path: {formattedPath(slug)}</p>
      </>
    );
  } else {
    return (
      <>
        <h2>Catch-All-Segments 페이지</h2>
        <p>path: /catch-all-segments</p>
        <h3>현재 경로를 포함하지 않는 방법</h3>
          <p>디렉토리 이름을 [...slug] 형태로 생성</p>
        <h3>현재 경로를 포함하는 방법</h3>
          <p>디렉토리 이름을 [[...slug]] 형태로 생성</p>
        <h3>공통 부분</h3>
        <ol>
          <li>params의 slug에 string[]형태로 전달</li>
          <li>slug배열의 길이에 따라 보여줄 페이지를 작성</li>
        </ol>
      </>
    );
  }
};

export default CatchAllSegments;
