import { Box, Container, Link, Typography } from '@mui/material';
import { Instagram, LinkedIn } from '@mui/icons-material';
import React from 'react';

const Footer = () => (
  <footer
    style={{
      width: '100%',
      padding: '1rem 2rem',
      borderTop: '1px solid #22243a',
    }}
  >
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Typography variant="body1" color="text.primary">
        &copy; {new Date().getFullYear()} Concept 44. All rights reserved.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Box
          component="nav"
          display="flex"
          alignItems="center"
          gap={3}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Link href="#cases">WORKS</Link>
          <Link href="#services">PROJECT CREATION</Link>
          <Link href="#steps">TECHNOLOGIES</Link>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
        {/* Social Media Icons */}
        <Link
          href="https://www.instagram.com/concept44.dev"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          sx={{ color: 'inherit' }}
        >
          <Instagram />
        </Link>
        <Link
          href="https://www.linkedin.com/company/concept44"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          sx={{ color: 'inherit' }}
        >
          <LinkedIn />
        </Link>
      </Box>
      {/* Mobile navigation and icons */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <Box display="flex" gap={2} justifyContent="flex-end">
          <Link
            href="https://www.instagram.com/concept44.dev"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            sx={{ color: 'inherit' }}
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.linkedin.com/company/concept44"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            sx={{ color: 'inherit' }}
          >
            <LinkedIn />
          </Link>
        </Box>
      </Box>
    </Container>
  </footer>
);

export default Footer;
