// src/components/GetInTouchSection.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const GetInTouchSection = () => (
  <Box sx={{ textAlign: "center" }}>
    <Typography variant="h5" gutterBottom>
      Interested in collaborating or learning more?
    </Typography>
    <Button variant="outlined" size="large" href="/contact" sx={{ mt: 2 }}>
      Get in Touch
    </Button>
  </Box>
);

export default GetInTouchSection;
