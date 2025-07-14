import { Box, Button, Container, Typography } from '@mui/material';

const ContactUs = () => {
  return (
    <Box
      component="section"
      id="contact"
      aria-label="Contact Us"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        minHeight: '100vh',
        py: { xs: 5, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ xs: 'column', md: 'column' }}
          gap={{ xs: 4, md: 10 }}
          justifyContent={{ xs: 'center', md: 'center' }}
        >
          <Box>
            <Typography variant="h1" mb={3} textAlign={{ xs: 'center' }}>
              Let’s Make It Happen
            </Typography>
            <Typography variant="h5" color="text.disabled" textAlign={{ xs: 'center' }}>
              Tell us about your project — we’ll help bring it to life at any stage
            </Typography>
          </Box>
          <Button component="a" href="/contact" variant="contained">
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
