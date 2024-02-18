import { Avatar, TableCell, TableRow } from "@mui/material";
import React from 'react';

interface UserProps {
  user: User;
}

interface User {
  id: string;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

const UserComponent: React.FC<UserProps> = ({ user }) => {
  return (
    <TableRow hover>
      <TableCell>
        <Avatar alt={user.id} src={user.avatar} />
      </TableCell>
      <TableCell>{user.first_name}</TableCell>
      <TableCell>{user.last_name}</TableCell>
      <TableCell>{user.email}</TableCell>
    </TableRow>
  );
};

export default UserComponent;
