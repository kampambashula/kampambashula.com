// src/components/ClientsSection.js
import React from "react";
import { Box, Typography } from "@mui/material";

const clients = [
  { name: "USAID", logo: "/images/clients/usaid.png" },
  { name: "Global Green Growth Institute", logo: "/images/clients/gggi.png" },
  { name: "Center for Trade and Policy Development", logo: "/images/clients/ctpd.jpg" },
  { name: "Consumer Unit and Trust Society", logo: "/images/clients/cuts.png" },
  { name: "Civil Society for Poverty Reduction", logo: "/images/clients/cspr.png" },
  { name: "Civil Society Debt Alliance", logo: "/images/clients/cso.jpeg" },
];

const ClientsSection = () => (
  <Box sx={{ textAlign: "center", mb: 6 }}>
    <Typography variant="h4" gutterBottom>
      Clients & Partners
    </Typography>
    
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: 3,
        px: 2,
        "&::-webkit-scrollbar": { display: "none" },
        scrollbarWidth: "none",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
      }}
    >
      {clients.map((client, index) => (
        <Box
          key={index}
          component="img"
          src={client.logo}
          alt={client.name}
          sx={{
            flex: "0 0 auto",
            maxWidth: 120,
            height: "auto",
            filter: "grayscale(100%)",
            transition:
              "filter 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer",
            scrollSnapAlign: "start",
            "&:hover": {
              filter: "grayscale(0%)",
              transform: "scale(1.1)",
              boxShadow: "0 4px 15px rgba(80, 200, 120, 0.6)",
              borderRadius: "8px",
            },
          }}
        />
      ))}
    </Box>
  </Box>
);

export default ClientsSection;
