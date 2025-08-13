// src/pages/Contact.js
import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Container,
  Alert,
} from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields: Name, Email, and Message.");
      setSuccess(false);
      return;
    }

    setError("");
    // TODO: Integrate your email or backend API call here

    // Simulate success
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Have questions, collaboration ideas, or just want to say hello? Fill out the form below or email me directly at{" "}
        <a href="mailto:kampambashula@egmail.com">kampambashula@gmail.com</a>.
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Thank you for your message! I will get back to you shortly.
        </Alert>
      )}

      <Box component="form" noValidate onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Phone (optional)"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={5}
          margin="normal"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3 }}
        >
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
