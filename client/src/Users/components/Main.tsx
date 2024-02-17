import { Avatar, TableBody, TableCell, TableRow } from "@mui/material";
import * as React from "react";

const Main: React.FC<{ currentUsers: Array<object> }> = ({ currentUsers }) => {
  return (
    <TableBody>
      {currentUsers.map((user: object, index: number) => (
        <TableRow hover key={index}>
          <TableCell>
            <Avatar alt={user.id} src={user.avatar} />
          </TableCell>
          <TableCell>{user.first_name}</TableCell>
          <TableCell>{user.last_name}</TableCell>
          <TableCell>{user.email}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Main;
