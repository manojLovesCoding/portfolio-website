import { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a0392f81-43c1-4555-a543-989e0cb4772f', // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus({ loading: false, success: 'Message sent successfully!', error: null });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      setStatus({ loading: false, success: null, error: error.message });
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      {status.success && <Alert severity="success">{status.success}</Alert>}
      {status.error && <Alert severity="error">{status.error}</Alert>}
      <Box my={2} component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Your Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          variant="outlined"
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={status.loading}
        >
          {status.loading ? 'Sending...' : 'Send Message'}
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
