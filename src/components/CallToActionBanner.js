// src/components/CallToActionBanner.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const CallToActionBanner = () => (
  <Box
    sx={{
      bgcolor: "primary.main",
      color: "white",
      py: 6,
      textAlign: "center",
      borderRadius: 2,
      mx: 2,
      my: 6,
    }}
  >
    <Typography variant="h4" gutterBottom>
      Ready to Transform Your Business?
    </Typography>
    <Typography variant="h6" sx={{ mb: 3 }}>
      Book a personalized session and let’s make impactful change together.
    </Typography>
    <Button
      variant="contained"
      size="large"
      href="/contact"
      sx={{ bgcolor: "gold", color: "black", "&:hover": { bgcolor: "#e6b800" } }}
    >
      Book a Session
    </Button>
  </Box>
);

export default CallToActionBanner;
