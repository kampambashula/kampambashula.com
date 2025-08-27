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
            Kampamba Shula is a Zambian economist, mathematician, and software developer whose work bridges economic theory, machine learning and policy advocacy. With experience in research, financial advisory, and statistical analysis, Kampamba has influenced national policy on gold reserves, sovereign wealth funds and planning frameworks. Known for pioneering ideas such as copper-anchored derivatives, a Tzedaka-based negative income tax system and critiques of oversimplified economic models. Beyond policy, Kampamba  develops AI-driven solutions like policy simulation and climate prediction systems. A frequent media commentator, Recognized as a thought leader advancing innovative, evidence-based approaches to Zambia’s development
          </Typography>
          <Typography variant="body1" paragraph>
            Work spans several sectors including mining, agriculture, energy, and real estate investment — all aimed at fostering economic resilience and diversification in Zambia and beyond. Leveraging technology and economic insights to empower communities and decision-makers.
          </Typography>
          <Typography variant="body1" paragraph>
            Outside of my professional work, Kampamba enjoys exploring emerging technologies, contributing to open-source projects, and mentoring young professionals interested in economics and data science.
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
