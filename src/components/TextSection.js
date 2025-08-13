// src/components/TextSection.js
import React from "react";
import { Box, Typography } from "@mui/material";

const TextSection = ({ title, children }) => (
  <Box sx={{ textAlign: "center", mb: 6 }}>
    {title && <Typography variant="h4" gutterBottom>{title}</Typography>}
    <Typography variant="body1" maxWidth="sm" mx="auto">
      {children}
    </Typography>
  </Box>
);

export default TextSection;
