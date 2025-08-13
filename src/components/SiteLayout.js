// src/components/SiteLayout.js
import React from "react";
import { Container, Box } from "@mui/material";

const SiteLayout = ({ children }) => {
  return (
    <Box>
      {/* You can add header/nav here if any */}
      
      {/* Main content constrained to maxWidth container */}
      <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
        {children}
      </Container>

      {/* You can add footer here if any */}
    </Box>
  );
};

export default SiteLayout;
