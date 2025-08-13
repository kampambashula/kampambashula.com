import React from "react";
import { Container, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        This Privacy Policy describes how we collect, use, and protect your personal information.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Information We Collect
      </Typography>
      <Typography variant="body1" paragraph>
        We may collect information you provide to us directly, as well as data automatically collected 
        when you use our site.
      </Typography>
      <Typography variant="h5" gutterBottom>
        How We Use Your Information
      </Typography>
      <Typography variant="body1" paragraph>
        Your data helps us improve our services, provide customer support, and deliver relevant content.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Last updated: {new Date().toLocaleDateString()}
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
