import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function InputWrapper(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 300,
        height: "auto",
        margin: "20px auto",
        gap: 2,
        padding: 10,
      }}
    >
      {props.children}
    </Box>
  );
}
