import React, { useContext } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { DataContext } from "../context/Context";

export const Select = () => {
  const { pages, actualPages,goToPage } = useContext(DataContext);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <NativeSelect
          value={actualPages}
          name="goTo"
          data-type="goTo"
          onChange={(e) => goToPage("", e)}>
          {Array.from(Array(pages).keys()).map((page) => {
            return (
              <option value={page + 1} key={page + 1}>
                {page + 1}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
      <select
          value={actualPages}
          name="goTo"
          data-type="goTo"
          onChange={(e) => goToPage("", e)}>
        {Array.from(Array(pages).keys()).map((page) => {
          return (
            <option value={page + 1} key={page + 1}>
              {page + 1}
            </option>
          );
        })}
      </select>
    </Box>
  );
};
