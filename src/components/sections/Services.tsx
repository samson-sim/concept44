'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceCard from '../ServiceCard';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    image: '/service1.svg',
    title: 'BLOCKCHAIN INTO BUSSINESS',
    description:
      'Enhancing security, automating workflows, optimizing efficiency, and increasing transparency.',
  },
  {
    image: '/service2.svg',
    title: 'WEB DEVELOPMENT',
    description:
      'Building modern websites, platforms, and Web3 apps with blockchain integration, security, and scalability.',
  },
  {
    image: '/service3.svg',
    title: 'DEVELOPMENT TOKENS',
    description:
      'Secure blockchain solutions with auditing, optimized performance, automation, and reliability',
  },
  {
    image: '/service4.svg',
    title: 'DESIGN',
    description:
      'Crafting UI/UX, branding, animations, and visuals for blockchain startups and Web3 projects',
  },
  {
    image: '/service5.svg',
    title: 'NFT DEVELOPMENT',
    description:
      'Creating NFT collections, marketplaces, smart contracts, and unique digital asset ecosystems',
  },
  {
    image: '/service6.svg',
    title: 'COMMUNITY MANAGEMENT',
    description:
      'Growing and engaging online communities through content, audience interaction, and retention',
  },
  {
    image: '/service7.svg',
    title: 'WEB3 MARKETING',
    description:
      'Promoting blockchain startups through strategic marketing, PR, brand positioning, and user',
  },
  {
    image: '/service8.svg',
    title: 'DATA & ANALYTICS',
    description:
      'Tracking on-chain data, user behavior, and market trends to optimize strategy and improve project performance',
  },
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
      id="services"
      aria-label="Services"
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
          <Typography variant="h4" letterSpacing={10} color="#6589FF" mb={2}>
            SERVICES
          </Typography>
          <Typography variant="h2" mb={2}>
            COMPREHENSIVE SOLUTION
          </Typography>
          <Typography variant="h5" color="text.disabled">
            We provide a full range of services for projects — from concept to launch
          </Typography>
        </Box>
        <Box ref={cardsRef}>
          <Grid container rowSpacing={3} columnSpacing={5}>
            {services.map((service) => (
              <Grid key={service.image} data-card size={{ xs: 12, sm: 6, md: 3 }}>
                <ServiceCard {...service} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
