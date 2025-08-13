// src/components/PhotoTextSection.js
import React from "react";
import { Box, Typography } from "@mui/material";

const PhotoTextSection = ({ imgSrc, alt, title, text }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 4,
      flexDirection: { xs: "column", md: "row" },
      mb: 6,
      px: { xs: 2, md: 6 },
    }}
  >
    <Box
      component="img"
      src={imgSrc}
      alt={alt}
      sx={{
        width: { xs: "100%", md: 400 },
        borderRadius: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "scale(1.03)" },
      }}
    />
    <Box sx={{ maxWidth: 600 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
        {text}
      </Typography>
    </Box>
  </Box>
);

export default PhotoTextSection;
