import React from "react";

const GroupLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <h3>이 메시지는 그룹 레이아웃에서 작성되었습니다</h3>
      <p>또한 루트 레이아웃 하위에 작성 되었으므로, 중첩 레이아웃 입니다</p>
      {children}
    </>
  );
};

export default GroupLayout;