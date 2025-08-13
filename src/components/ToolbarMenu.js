// src/components/ToolbarMenu.js
import React from 'react';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ToolbarMenu = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/about">About</Button>
      <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
      <Button color="inherit" component={Link} to="/consulting">Consulting</Button>
      <Button color="inherit" component={Link} to="/research">Research</Button>
      <Button color="inherit" component={Link} to="/books">Books</Button>
      <Button color="inherit" component={Link} to="/speaking">Speaking</Button>
      <Button color="inherit" component={Link} to="/blog">Blog</Button>
      <Button color="inherit" component={Link} to="/contact">Contact</Button>
    </Box>
  );
};

export default ToolbarMenu;
