'use client';
import { Box, Container, Typography } from '@mui/material';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RevolutionCard from '../RevolutionCard';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    image: '/innovation_icon.png',
    title: 'INNOVATION',
    description: 'Advanced blockchain solutions for Web3 transformation',
  },
  {
    image: '/transparent_icon.png',
    title: 'TRANSPARENCY',
    description: 'Open and verifiable smart contract infrastructure',
  },
  {
    image: '/reliability_icon.png',
    title: 'RELIABILITY',
    description: 'Secure, scalable, and efficient blockchain frameworks',
  },
];

const RevolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

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
      id="revolution"
      aria-label="WEB3 Revolution"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        py: { xs: 5, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          gap={{ xs: 4, md: 10 }}
          alignItems={{ xs: 'start', md: 'center' }}
          justifyContent={{ xs: 'start', md: 'space-between' }}
        >
          <Box ref={titleRef}>
            <Typography variant="h2" mb={3}>
              A TEAM
              <br />
              FOR YOUR
              <br />
              WEB3 PROJECT
            </Typography>
            <Typography variant="h5" color="text.disabled">
              We handle the entirelizing
              <br />
              technical side — from design to launch
              <br />
            </Typography>
          </Box>

          <Box ref={cardsRef} display="flex" flexDirection="column" gap={4}>
            {cards.map((card, index) => (
              <Box key={card.title} data-card={index}>
                <RevolutionCard {...card} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RevolutionSection;
