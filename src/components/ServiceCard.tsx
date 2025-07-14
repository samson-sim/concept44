import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

const ServiceCard: FC<{ image: string; title: string; description: string }> = ({
  image,
  title,
  description,
}) => {
  return (
    <Box
      borderRadius={2}
      bgcolor="#090A13"
      overflow="hidden"
      sx={{
        img: {
          transition: 'transform 2s',
        },
        ':hover': { img: { transform: 'scale(1.2)' } },
      }}
    >
      <Box width="100%" height={220} position="relative">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </Box>
      <Box py={5} px={3} height={{ xs: 'initial', md: 275 }}>
        <Typography fontSize={22} fontWeight={500} mb={3}>
          {title}
        </Typography>
        <Typography variant="h6" fontWeight={300} fontSize={20} color="text.disabled">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ServiceCard;
