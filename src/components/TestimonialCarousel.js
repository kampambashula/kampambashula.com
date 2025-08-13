// src/components/TestimonialCarousel.js
import React from "react";
import Slider from "react-slick";
import { Box, Typography, Paper } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    text: "Kampamba's insights transformed our business strategy.",
  },
  {
    name: "Jane Smith",
    text: "Professional, insightful and highly knowledgeable.",
  },
  {
    name: "Ahmed Ali",
    text: "A true expert in economic forecasting and software development.",
  },
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", my: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        What Clients Say
      </Typography>
      <Slider {...settings}>
        {testimonials.map(({ name, text }, idx) => (
          <Paper key={idx} sx={{ p: 4, minHeight: 150 }}>
            <Typography variant="body1" sx={{ fontStyle: "italic", mb: 2 }}>
              "{text}"
            </Typography>
            <Typography variant="subtitle2" align="right">
              — {name}
            </Typography>
          </Paper>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialCarousel;
