import React from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ToolbarNav = () => {
  return (
    <AppBar position="static" sx={{ py: 2 }}>
      <Toolbar
        sx={{
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          Kampamba Shula
        </Typography>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/portfolio">
            Portfolio
          </Button>
          <Button color="inherit" component={Link} to="/consulting">
            Consulting
          </Button>
          <Button color="inherit" component={Link} to="/research">
            Research
          </Button>
          <Button color="inherit" component={Link} to="/books">
            Books
          </Button>
          <Button color="inherit" component={Link} to="/speaking">
            Speaking
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            Blog
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarNav;
