import React from "react";
import { Container, Typography, Box, Avatar, Divider } from "@mui/material";
import profilePic from "../assets/images/dp.jpg";
import WhatIDoSection from "../components/WhatIDoSection";
import SkillBars from "../components/SkillBars";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Profile Photo */}
        <Avatar alt="Kampamba Shula" src={profilePic} sx={{ width: 160, height: 160 }} />

        {/* Text Content */}
        <Box>
          <Typography variant="h4" gutterBottom>
            About Kampamba Shula
          </Typography>
          <Typography variant="body1" paragraph>
            I am passionate about applying data-driven strategies to drive economic development and sustainable growth. With solid experience in software development, I build tools and solutions that integrate data analytics with policy making and business innovation.
          </Typography>
          <Typography variant="body1" paragraph>
            My work spans several sectors including mining, agriculture, energy, and real estate investment — all aimed at fostering economic resilience and diversification in Zambia and beyond. I believe in leveraging technology and economic insights to empower communities and decision-makers.
          </Typography>
          <Typography variant="body1" paragraph>
            Outside of my professional work, I enjoy exploring emerging technologies, contributing to open-source projects, and mentoring young professionals interested in economics and data science.
          </Typography>
          <Divider sx={{ mb: 6 }} />

          <WhatIDoSection />
          <Divider sx={{ mb: 6 }} />

          <SkillBars />
        </Box>
      </Box>
    </Container>
  );
};

export default About;
