// src/components/GallerySection.js
import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GallerySection = ({ title, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(images.length, 4), // Show up to 4 images at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 960, // below md
        settings: {
          slidesToShow: Math.min(images.length, 3),
        },
      },
      {
        breakpoint: 600, // below sm
        settings: {
          slidesToShow: Math.min(images.length, 2),
        },
      },
      {
        breakpoint: 400, // below xs
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" gutterBottom align="center">
        {title}
      </Typography>

      <Slider {...settings}>
        {images.map((img, idx) => (
          <Box
            key={idx}
            sx={{
              px: 1,
              outline: "none", // remove blue outline on focus
            }}
          >
            <Box
              component="img"
              src={img.src}
              alt={img.alt}
              sx={{
                width: "100%",
                maxHeight: 150,
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default GallerySection;
