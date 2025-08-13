// src/components/ServiceCards.js
import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { Build, TrendingUp, SpeakerNotes } from "@mui/icons-material";

const services = [
  {
    icon: <Build color="primary" sx={{ fontSize: 40 }} />,
    title: "Consulting",
    description: "Providing expert advice in economics, policy, and strategy.",
  },
  {
    icon: <TrendingUp color="primary" sx={{ fontSize: 40 }} />,
    title: "Data Analysis",
    description: "Transforming data into actionable business insights.",
  },
  {
    icon: <SpeakerNotes color="primary" sx={{ fontSize: 40 }} />,
    title: "Public Speaking",
    description: "Engaging talks to inspire and educate audiences.",
  },
];

const ServiceCards = () => (
  <Box sx={{ maxWidth: 900, mx: "auto", my: 6 }}>
    <Typography variant="h4" align="center" gutterBottom>
      Services Offered
    </Typography>
    <Grid container spacing={4}>
      {services.map(({ icon, title, description }, idx) => (
        <Grid item xs={12} md={4} key={idx}>
          <Card sx={{ height: "100%", p: 3, textAlign: "center" }}>
            <Box mb={2}>{icon}</Box>
            <Typography variant="h6" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ServiceCards;
