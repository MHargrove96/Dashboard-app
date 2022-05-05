import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar  position="static" sx={{ backgroundColor: "#3F51B5" }}>
        <Toolbar>
          <Typography variant="h6" textAlign={'left'} component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
