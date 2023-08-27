'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Props = {};

export type TUser = {
  _id: string;
  username: string;
  role: string;
  email: string;
  password: string;
};

const Users = (props: Props) => {
  const [users, setUsers] = useState<TUser[]>([]);
  useEffect(() => {
    axios
      .get('http://localhost:6969/users/getAllUsers')
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username}: {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
