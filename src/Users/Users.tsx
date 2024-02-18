import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import axios from 'axios';
import * as React from 'react';
import Header from "./components/Header";
import Main from './components/Main';
import PaginationC from './components/PaginationC';


const Users = () => {
  const [currentUsers, setCurrentUsers] = React.useState([]);
  const [countPages, setCountPages] = React.useState(0)
  const [page, setPage] = React.useState(1)
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  React.useEffect(() => {
    axios(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.data)
      .then(info => setCurrentUsers(info.data));
  }, [currentUsers]);

  React.useEffect(() => {
    axios("https://reqres.in/api/users")
      .then(res => res.data)
      .then(info => setCountPages(info.total_pages));
  }, []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Table stickyHeader aria-label="sticky table">
          <Header />
          <Main currentUsers={currentUsers}/>
          <PaginationC count={countPages} page={page} onChange={handlePageChange}/>
        </Table>
    </Paper>
  );
}
 
export default Users