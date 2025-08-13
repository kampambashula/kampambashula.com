// src/components/StatsSection.js
import React from "react";
import CountUp from "react-countup";
import { Box, Typography, Grid } from "@mui/material";

const StatsSection = () => {
  const stats = [
    { label: "Years of Experience", value: 13 },
    { label: "Projects Completed", value: 34 },
    { label: "Clients Served", value: 30 },
  ];

  return (
    <Box sx={{ my: 6, textAlign: "center" }}>
      <Grid container spacing={6} justifyContent="center">
        {stats.map(({ label, value }, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Typography variant="h3" color="secondary" gutterBottom>
              <CountUp end={value} duration={3} />
            </Typography>
            <Typography variant="subtitle1">{label}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
