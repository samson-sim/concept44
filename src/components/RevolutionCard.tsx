import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

const RevolutionCard: FC<{ image: string; title: string; description: string }> = ({
  image,
  title,
  description,
}) => {
  return (
    <Box padding={4} borderRadius={2} bgcolor="#090A13">
      <Box display="flex" gap={2} alignItems="center" mb={3}>
        <Image src={image} alt={title} width={50} height={50} />
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Typography variant="h6" fontWeight={300} fontSize={20} color="text.disabled">
        {description}
      </Typography>
    </Box>
  );
};

export default RevolutionCard;
