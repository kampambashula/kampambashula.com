import React from "react";
import { Box, Grid, Typography, Link as MuiLink, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 5,
        mt: 5,
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Column 1 - Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Information
          </Typography>
          <MuiLink
            component={RouterLink}
            to="/privacy-policy"
            color="inherit"
            underline="hover"
            display="block"
          >
            Privacy Policy
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/terms-and-conditions"
            color="inherit"
            underline="hover"
            display="block"
          >
            Terms & Conditions
          </MuiLink>
          <MuiLink
            component={RouterLink}
            to="/cookie-policy"
            color="inherit"
            underline="hover"
            display="block"
          >
            Cookie Policy
          </MuiLink>
        </Grid>

        {/* Column 2 - Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <MuiLink href="/about" color="inherit" underline="hover" display="block">
            About
          </MuiLink>
          <MuiLink href="/portfolio" color="inherit" underline="hover" display="block">
            Portfolio
          </MuiLink>
          <MuiLink href="/contact" color="inherit" underline="hover" display="block">
            Contact
          </MuiLink>
          <MuiLink href="/research" color="inherit" underline="hover" display="block">
            Research
          </MuiLink>
        </Grid>

        {/* Column 3 - Services */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Services
          </Typography>
          <MuiLink href="/consulting" color="inherit" underline="hover" display="block">
            Consulting
          </MuiLink>
          <MuiLink href="/speaking" color="inherit" underline="hover" display="block">
            Public Speaking
          </MuiLink>
          <MuiLink href="/books" color="inherit" underline="hover" display="block">
            Books & Publications
          </MuiLink>
        </Grid>

        {/* Column 4 - Contact */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">Email: kampambashula@gmail.com</Typography>
          <Typography variant="body2">Phone: +260 768845605</Typography>
          <Typography variant="body2">Location: Lusaka, Zambia</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3, bgcolor: "rgba(255,255,255,0.2)" }} />

      <Box textAlign="center">
        <Typography variant="body2">
          © {new Date().getFullYear()} Kampamba Shula. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
