import React, { useContext } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";

import { Select } from "./Select";

import { DataContext } from "../context/Context";
export const Pagination = () => {
  const { totalResults, pages, actualPages, prevPage, nextPage, goToPage } =
    useContext(DataContext);

  return (
    <>
      <Grid item xs={12} m="25px 0">
        <Grid container justifyContent="space-between" alignItems="baseline">
          <Grid item>
            <Typography variant="h6">Total results:{totalResults} </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              Page {actualPages} of {pages}
            </Typography>
          </Grid>
          <Grid item>
            <Box display="flex">
              <Typography variant="h6">Go to page:</Typography>
              <Select />
            </Box>
          </Grid>
          <Grid item>
            {prevPage && (
              <Button variant="contained" color="info" data-type="prev" onClick={e=>{goToPage(prevPage,e)}}>
                Prev
              </Button>
            )}
            {nextPage && (
              <Button variant="contained" color="info" data-type="next" onClick={e=> {goToPage(nextPage,e)}} >
                Next
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
