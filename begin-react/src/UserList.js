import React from 'react';
import User from './User';

// User의 parent 컴포넌트
function UserList({ users, onRemove, onToggle, count, count2 }) {
  console.log(count);
  console.log(count2);
  return (
    <div>
      {/* 고차함수 콜백함수의 첫번째 인수인 item이 props...? */}
      {/* 각 child = user를 가리키는 데 unique key라는 prop을 필요로 한다. 여기서는 id가 고유의 값  */}
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
      {/* id(=unique key)가 없으면 index를 넣어주어도 되는데, 웬만해서는 key대신 index 넣는것은 피해주는 것이 좋다 */}
      {/* {users.map((user, index) => (
        <User user={user} key={index} />
      ))} */}
      <span>활성 사용자 수: {count}</span>
      <span>활성 사용자 수: {count2}</span>
    </div>
  );
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users,
);
