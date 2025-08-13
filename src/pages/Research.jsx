import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import HeroSection from "../components/HeroSection";
import researchBg from "../assets/images/45.jpg";

export default function Research() {
  return (
    <>
      <HeroSection
        title="Research & Thought Leadership"
        subtitle="In-depth analyses, publications, and insights into economics, finance, and policy development."
        ctaText="Read My Work"
        ctaLink="#research-list"
        bgImage={researchBg}
      />
      <Container sx={{ py: 5 }} id="research-list">
        <Typography variant="h4" gutterBottom>
          Latest Research Papers
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} md={4} key={item}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Research Title {item}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Short description of the research and its impact.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
