'use client';

import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const text = `WE ARE AN OUTSOURCING AGENCY THAT SUPPORTS WEB3 PROJECTS WITH DEVELOPMENT, DESIGN, AND TECHNICAL ASSISTANCE. OUR TEAM HANDLES TASKS END-TO-END — FROM LANDING PAGES AND USER INTERFACES TO BASIC BLOCKCHAIN INTEGRATION`;

const InfoSection = () => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const theme = useTheme();

  useGSAP(
    () => {
      if (!sectionRef.current || !textRef.current) return;
      const words = textRef.current.querySelectorAll('.gsap-word');
      gsap.fromTo(
        words,
        { color: theme.palette.text.disabled, opacity: 0.1 },
        {
          color: theme.palette.text.primary,
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: isMobile ? 'top 80%' : 'top 80%',
            end: 'bottom 40%',
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <Box
      component="section"
      id="about"
      aria-label="About us"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 5, md: 10 },
      }}
      ref={sectionRef}
    >
      <Container maxWidth="lg">
        <Typography variant="h3">
          <span ref={textRef}>
            {text.split(' ').map((word, i) => (
              <span
                key={i}
                className="gsap-word"
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {word + (i !== text.split(' ').length - 1 ? ' ' : '')}
              </span>
            ))}
          </span>
        </Typography>
      </Container>
    </Box>
  );
};

export default InfoSection;
