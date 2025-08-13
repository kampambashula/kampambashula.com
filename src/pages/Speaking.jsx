import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import HeroSection from "../components/HeroSection";
import speakingBg from "../assets/images/45.jpg";

export default function Speaking() {
  return (
    <>
      <HeroSection
        title="Speaking Engagements"
        subtitle="Keynotes, panel discussions, and workshops on economic policy, finance, and business strategy."
        ctaText="Book Me"
        ctaLink="/contact"
        bgImage={speakingBg}
      />
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          Past Events
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3].map((event) => (
            <Grid item xs={12} md={4} key={event}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image={`/assets/images/speaking/event${event}.jpg`}
                  alt={`Event ${event}`}
                />
                <CardContent>
                  <Typography variant="h6">Event Title {event}</Typography>
                  <Typography variant="body2">
                    Short recap of the event and key takeaways.
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
