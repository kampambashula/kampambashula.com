// src/components/SkillBars.js
import React from "react";
import { Box, Typography, LinearProgress, Stack } from "@mui/material";

const skills = [
  { name: "Data Science", level: 90 },
  { name: "Economic Consulting", level: 85 },
  { name: "Public Speaking", level: 85 },
  { name: "Software Development", level: 80 },
];

const SkillBars = () => (
  <Box sx={{ maxWidth: 600, mx: "auto", my: 6 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Skills & Expertise
    </Typography>
    <Stack spacing={3}>
      {skills.map(({ name, level }) => (
        <Box key={name}>
          <Typography variant="subtitle1" gutterBottom>
            {name}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={level}
            sx={{ height: 10, borderRadius: 5 }}
          />
        </Box>
      ))}
    </Stack>
  </Box>
);

export default SkillBars;
