import { HEADER_HEIGHT } from '@/constants';
import { Box, Container, Typography } from '@mui/material';
import Logo from '@/components/Logo';

const Hero = () => {
  return (
    <Box
      component="section"
      id="hero"
      aria-label="Hero"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ mt: { xs: 50, md: 0 } }}>
        <Typography variant="h4" color="#6589FF" letterSpacing={10}>
          WEB3 AGENCY
        </Typography>
        <Typography variant="h1" mb={2}>
          CONCEPT 44
        </Typography>
        <Typography variant="h5" color="text.disabled">
          Design, development, integration,
          <br />
          and support of Web3 projects on
          <br />
          outsource — fast and reliable
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            top: { xs: '15%', md: '50%' },
            transform: { md: 'translateY(-50%)' },
            right: { xs: -50, md: '-45%', lg: '-32%', xl: '-17%' },
            zIndex: -1,
          }}
        >
          <Logo />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
