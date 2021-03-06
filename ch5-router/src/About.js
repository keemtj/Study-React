import React from 'react';
import qs from 'qs';

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  // URL parameter, query는 값을 불러올 때 문자열로 읽어진다
  // query.id로 해서 그 값을 숫자로 가져오고싶으면 parseInt(query.id, 10)해 주어야 한다
  const detail = query.detail === 'true';
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {detail && <p>detail 값이 true입니다.</p>}
    </div>
  );
}

export default About;
