import React from "react";
import { Grid, Typography } from "@mui/material";
import { Navbar } from "./Navbar";
import { Characters } from "./Characters";
import {Pagination} from "./Pagination";

export const Home = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={11} lg={10} xl={9}>
          <Grid container justifyContent="center">
            <Grid item xs={12} bgcolor="lightgreen">
              <Grid container justifyContent="center">
                <Navbar />
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between" flexDirection="column">
                <Pagination/>
              </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Characters />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
