import React from "react";
import { Container, Typography } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom>
        Terms & Conditions
      </Typography>
      <Typography variant="body1" paragraph>
        By using this website, you agree to the following terms and conditions.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Use of Website
      </Typography>
      <Typography variant="body1" paragraph>
        You agree not to misuse our website, engage in illegal activity, or violate applicable laws.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        We are not liable for damages resulting from the use or inability to use our website.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Last updated: {new Date().toLocaleDateString()}
      </Typography>
    </Container>
  );
};

export default TermsAndConditions;
