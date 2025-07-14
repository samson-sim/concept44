'use client';

import Lottie from 'lottie-react';
import logo from '../../public/logo.json';
import logo_mob from '../../public/logo_mob.json';
import { Box, useMediaQuery } from '@mui/material';

const Logo = () => {
  const isXl = useMediaQuery('(min-width: 1600px)');
  const isMd = useMediaQuery('(min-width: 900px)');
  const isXs = useMediaQuery('(max-width: 900px)');

  return (
    <Box position="relative" sx={{ zIndex: -1 }}>
      <Lottie
        animationData={isXs ? logo_mob : logo}
        loop={true}
        style={{
          height: isXl ? 1400 : isMd ? 1000 : 'unset',
          transform: isXs ? 'scale(1.5)' : 'unset',
        }}
      />
    </Box>
  );
};

export default Logo;
