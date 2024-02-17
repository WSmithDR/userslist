import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import axios from 'axios';
import * as React from 'react';
import Header from "./components/Header";
import Main from './components/Main';


export default function Presentation() {
  const [currentUsers, setCurrentUsers] = React.useState([]);

  React.useEffect(() => {
    axios("https://reqres.in/api/users?page=1")
      .then(res => res.data)
      .then(info => setCurrentUsers(info.data));
  }, []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 1000}}>
        <Table stickyHeader aria-label="sticky table">
          <Header />
          <Main currentUsers={currentUsers}/>
        </Table>
      </TableContainer>
    </Paper>
  );
}
