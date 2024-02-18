import { Box, Grid, Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import React from "react";

interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationC: React.FC<PaginationProps> = ({ count, page, onChange }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} minHeight={100}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Stack spacing={10}>
            <Pagination
              count={count}
              page={page}
              onChange={onChange}
              shape="rounded"
              size="large"
              variant="outlined"
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaginationC;
