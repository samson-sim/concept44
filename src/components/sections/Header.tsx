import { HEADER_HEIGHT } from '@/constants';
import { AppBar, Box, Button, Container, Typography, Link } from '@mui/material';
import Image from 'next/image';
import { Drawer } from './Drawer';

const Header = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        boxShadow: 'none',
        height: HEADER_HEIGHT,
        backgroundColor: 'transparent',
      }}
      component="header"
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
        <Box
          component="a"
          href="/"
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ textDecoration: 'none' }}
          color="text.primary"
        >
          <Image src="/logo.png" width={32} height={32} alt="Concept 44 logo" quality={100} />
          <Typography variant="body1" fontSize={20}>
            Concept 44
          </Typography>
        </Box>

        <Box
          component="nav"
          display="flex"
          alignItems="center"
          gap={3}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Link href="/#cases">WORKS</Link>
          <Link href="/#services">PROJECT CREATION</Link>
          <Link href="/#steps">TECHNOLOGIES</Link>
        </Box>
        <Button component="a" href="/contact" sx={{ display: { xs: 'none', md: 'block' } }}>
          CONTACT US
        </Button>
        <Drawer />
      </Container>
    </AppBar>
  );
};

export default Header;
