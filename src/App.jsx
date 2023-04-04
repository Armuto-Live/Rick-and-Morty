import { useContext } from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import { Characters } from "./components/Characters";
import { DataContext, DataProvider } from "./context/Context";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <DataProvider>
        <Home/>
      </DataProvider>
    </>
  );
}

export default App;
