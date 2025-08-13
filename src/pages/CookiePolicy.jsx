import React from "react";
import { Container, Typography} from "@mui/material";

const CookiePolicy = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Cookie Policy
      </Typography>
      <Typography variant="body1" paragraph>
        This Cookie Policy explains how we use cookies and similar technologies on our website.
      </Typography>
      <Typography variant="h5" gutterBottom>
        What Are Cookies?
      </Typography>
      <Typography variant="body1" paragraph>
        Cookies are small text files placed on your device to store data that can be recalled by our web servers.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Managing Cookies
      </Typography>
      <Typography variant="body1" paragraph>
        You can set your browser to refuse cookies, but this may limit some functionality of our website.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Last updated: {new Date().toLocaleDateString()}
      </Typography>
    </Container>
  );
};

export default CookiePolicy;
