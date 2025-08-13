import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function HeroSection({ title, subtitle, ctaText, ctaLink, bgImage }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
        p: 4
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ maxWidth: "700px", mb: 3 }}>
        {subtitle}
      </Typography>
      {ctaText && (
        <Button
          variant="contained"
          color="success"
          href={ctaLink}
          sx={{ fontWeight: "bold" }}
        >
          {ctaText}
        </Button>
      )}
    </Box>
  );
}
