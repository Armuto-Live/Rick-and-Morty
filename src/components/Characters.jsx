import * as React from "react";
import { useContext } from "react";
import { DataContext } from "../context/Context";
import { Grid, Box, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const Characters = () => {
  const { characters } = useContext(DataContext);
  return (
    <>
      {characters.map((item,idx) => {
        const { id, name, status, image, location, species } = item;
        return (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={idx}>
              <Card>
                <CardHeader title={name} subheader={status} />
                <CardMedia component="img" image={image} alt="name" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {location.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {species}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        );
      })}
    </>
  );
};
