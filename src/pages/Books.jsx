import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import HeroSection from "../components/HeroSection";
import booksBg from "../assets/images/21.jpg";

export default function Books() {
  return (
    <>
      <HeroSection
        title="Books & Publications"
        subtitle="Authoring works that inspire, educate, and challenge thinking."
        ctaText="Order Now"
        ctaLink="#books-list"
        bgImage={booksBg}
      />
      <Container sx={{ py: 5 }} id="books-list">
        <Grid container spacing={3}>
          {[1, 2, 3].map((book) => (
            <Grid item xs={12} md={4} key={book}>
              <Card>
                <CardMedia
                  component="img"
                  height="220"
                  image={`/assets/images/books/book${book}.jpg`}
                  alt={`Book ${book}`}
                />
                <CardContent>
                  <Typography variant="h6">Book Title {book}</Typography>
                  <Typography variant="body2">
                    Brief summary of the book and where to buy.
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
