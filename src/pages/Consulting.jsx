import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import HeroSection from "../components/HeroSection";
import consultingBg from "../assets/images/45.jpg";
import ServiceCards from "../components/ServiceCards";

export default function Consulting() {
  return (
    <>
      <HeroSection
        title="Consulting Services"
        subtitle="Providing actionable strategies in economics, finance, and business operations."
        ctaText="Get Started"
        ctaLink="/contact"
        bgImage={consultingBg}
      />
      <Container sx={{ py: 5 }}>
        <ServiceCards />
      </Container>
    </>
  );
}
