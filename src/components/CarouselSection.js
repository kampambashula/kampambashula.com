import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSection = ({ title, items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" gutterBottom align="center">
        {title}
      </Typography>
      <Slider {...settings}>
        {items.map((item, idx) => (
          <Box key={idx} sx={{ px: 2 }}>
            <Box
              component="img"
              src={item.image}
              alt={item.alt}
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" }
              }}
            />
            {item.caption && (
              <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                {item.caption}
              </Typography>
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselSection;
