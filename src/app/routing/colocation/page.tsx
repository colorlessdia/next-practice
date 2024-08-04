export const NoVisible = () => {
  return (
    <>
      <h2>이 컴포넌트는 보여지지 않는다</h2>
    </>
  );
};

const Colocation = () => {
  return (
    <>
      <h2>파일 공동 배치</h2>
      <ol>
        <li>라우팅 디렉토리의 page 파일에서 기본 내보내기를 보여준다</li>
        <li>디렉토리의 다른컴포넌트, 기본 내보내기 이외의 파일등은 보여지지 않는다</li>
      </ol>
      <ul>
        <li>
          colocation
          <ul>
            <li>page.tsx
              <dl>
                <dt>포함하는 컴포넌트</dt>
                <dd>export NoVisible(보여지지 않음)</dd>
                <dd>export default Colocation(보여짐)</dd>
              </dl>
            </li>
            <li>Dummy.tsx</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Colocation;
