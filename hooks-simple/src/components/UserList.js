import React from 'react';
import useResouces from './useResource';


const UserList = () => {
  const users = useResouces('users');

  return (
      <ul>
        {users.map(user => (
            <li key={user.id}>
                {user.name}
            </li>))}
      </ul>
  );
};

export default UserList;