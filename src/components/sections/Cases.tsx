'use client';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { image: '/service1.svg', title: 'Title', description: 'Deasc' },
  { image: '/service2.svg', title: 'Title', description: 'Deasc' },
  { image: '/service3.svg', title: 'Title', description: 'Deasc' },
  { image: '/service4.svg', title: 'Title', description: 'Deasc' },
  { image: '/service5.svg', title: 'Title', description: 'Deasc' },
  { image: '/service6.svg', title: 'Title', description: 'Deasc' },
  { image: '/service7.svg', title: 'Title', description: 'Deasc' },
  { image: '/service8.svg', title: 'Title', description: 'Deasc' },
  { image: '/service22.svg', title: 'Title', description: 'Deasc' },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    const title = titleRef.current;

    if (!section || !cards || !title) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      title,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      },
    );

    const cardElements = cards.querySelectorAll('[data-card]');
    tl.fromTo(
      cardElements,
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
      },
      '-=0.4',
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      component="section"
      id="cases"
      aria-label="Our Cases"
      sx={{ minHeight: '100vh', py: { xs: 5, md: 10 } }}
    >
      <Container maxWidth="lg">
        <Box
          ref={titleRef}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          mb={8}
        >
          <Typography variant="h2" mb={3}>
            OUR CASES
          </Typography>
        </Box>
        <Box ref={cardsRef}>
          <Grid container rowSpacing={4} columnSpacing={3}>
            {services.map((service, index) => (
              <Grid
                key={service.image}
                data-card
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{
                  img: {
                    transition: 'transform 2s',
                  },
                  ':hover': { img: { transform: 'scale(1.2)' } },
                }}
              >
                <Box
                  position="relative"
                  width="100%"
                  height={300}
                  overflow="hidden"
                  borderRadius={6}
                >
                  <Image src={service.image} fill alt={`Portfolio project ${index + 1}`} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" disabled>
            SHOW PORTFOLIO
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
