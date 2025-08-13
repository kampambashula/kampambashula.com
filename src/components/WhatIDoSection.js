// src/components/WhatIDoSection.js
import React from "react";
import { Box, Typography } from "@mui/material";

const WhatIDoSection = () => (
  <Box sx={{ textAlign: "center", mb: 6 }}>
    <Typography variant="h4" gutterBottom>
      What I Do
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Economist
    </Typography>
    <Typography variant="body2" paragraph>
      Crafting data-driven policies that promote inclusive economic growth and sustainable development.
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Data Scientist
    </Typography>
    <Typography variant="body2" paragraph>
      Leveraging advanced analytics and machine learning to generate actionable insights.
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Software Developer
    </Typography>
    <Typography variant="body2" paragraph>
      Designing scalable software solutions to solve complex challenges in multiple sectors.
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
      Entrepreneur
    </Typography>
    <Typography variant="body2" paragraph>
      Leading ventures that drive innovation and economic transformation.
    </Typography>
  </Box>
);

export default WhatIDoSection;
