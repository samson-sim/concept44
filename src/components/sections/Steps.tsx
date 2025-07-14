import { Box, Container, Typography } from '@mui/material';
import Logo from '@/components/Logo';

const Steps = () => {
  return (
    <Box
      component="section"
      id="steps"
      aria-label="44 Steps"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        position: 'relative',
        minHeight: '100vh',
        paddingY: { xs: 5, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ mt: { xs: 50, md: 0 } }}>
        <Typography variant="h2" mb={3}>
          44 STEPS
          <br />
          ONE ROADMAP
        </Typography>
        <Typography variant="h5" color="text.disabled">
          A structured and transparent approach
          <br />
          to project development. These 44
          <br />
          steps guide your idea from zero to full
          <br />
          implementation, ensuring efficiency,
          <br />
          security, and high-quality results
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '15%', md: '50%' },
            transform: { md: 'translateY(-50%)' },
            right: { xs: -50, md: '-28%', xl: '-15%' },
            zIndex: -1,
          }}
        >
          <Logo />
        </Box>
      </Container>
    </Box>
  );
};

export default Steps;
