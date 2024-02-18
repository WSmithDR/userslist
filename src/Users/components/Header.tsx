import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import headLabels from '../utils/header';

const Header: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        {headLabels.map((label, index) => (
          <TableCell key={index}>{label.name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Header;
