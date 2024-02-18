import { TableBody } from "@mui/material";
import React from 'react';
import User from "./User";

interface User {
  id: string;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface MainProps {
  currentUsers: User[];
}

const Main: React.FC<MainProps> = ({ currentUsers }) => {
  return (
    <TableBody>
      {currentUsers.map((user, index) => <User key={index} user={user}/>)}
    </TableBody>
  );
};

export default Main;
