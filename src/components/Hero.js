// src/components/HeroSection.js
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

const taglines = [
  "VISIONARY AUTHOR & SPEAKER",
  "STRATEGIC FUTURIST",
  "SYSTEMS THINKER & ECONOMIC ANALYST",
  "ECONOMIC POLICY EXPERT",
  "TECH & DATA VISIONARY",
  "GLOBAL POLICY INFLUENCER",
  "AI & MACHINE LEARNING INNOVATOR",
  "INFLUENCER IN DIGITAL TRANSFORMATION",
  "STRATEGIC ECONOMIC ADVISOR",
  "GLOBAL ECONOMIC COMMENTATOR",
];

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setFade(true);
      }, 300); // fade out duration
    }, 5000); // time before switching taglines
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/45.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <Box sx={{ maxWidth: "800px", px: 3 }}>
        
        
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            fontStyle: "italic",
            transition: "opacity 0.5s ease-in-out",
            opacity: fade ? 1 : 0,
            minHeight: "2.5em", // to prevent layout shift
          }}
        >
          {taglines[currentTagline]}
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Kampamba Shula elevates thinking across industries, inspiring leaders and organizations to innovate in a changing economic world
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            href="/portfolio"
            sx={{ px: 5 }}
          >
            Explore
          </Button>

          <Button
            variant="contained"
            size="large"
            href="/contact"
            sx={{
              px: 5,
              bgcolor: "#FFA500", // orange/gold color
              "&:hover": { bgcolor: "#e69500" }, // darker shade on hover
            }}
          >
            Book a Session
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
