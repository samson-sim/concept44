'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: 'GOALS', desc: 'Identifying business needs and defining objectives' },
  { title: 'DEVELOPMENT', desc: 'Writing smart contracts and integrating Web3 features' },
  { title: 'PLANNING', desc: 'Creating a strategy and technical requirements' },
  { title: 'DESIGN', desc: 'UX/UI development for seamless user experience' },
  { title: 'TESTING', desc: 'Ensuring security and bug-free functionality' },
  { title: 'LAUNCH', desc: 'Deploying the project on the blockchain' },
  { title: 'SCALING', desc: 'Optimizing and growing the platform' },
  { title: 'SUPPORT', desc: 'Ongoing updates and improvements' },
];

const Roadmap = () => {
  const containerRef = useRef(null);
  const stepRefs = useRef([]);
  const [activeSteps, setActiveSteps] = useState(Array(steps.length).fill(false));

  useEffect(() => {
    stepRefs.current.forEach((step, index) => {
      ScrollTrigger.create({
        trigger: step,
        start: 'top center+=100',
        onEnter: () => {
          setActiveSteps((prev) => {
            const updated = [...prev];
            for (let i = 0; i <= index; i++) updated[i] = true;
            return updated;
          });
        },
        onLeaveBack: () => {
          setActiveSteps((prev) => {
            const updated = [...prev];
            for (let i = index; i < steps.length; i++) updated[i] = false;
            return updated;
          });
        },
      });
    });
  }, []);

  return (
    <Box
      component="section"
      id="roadmap"
      aria-label="Roadmap"
      sx={{
        minHeight: '100vh',
        py: { xs: 5, md: 15 },
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            ref={containerRef}
            gap="100px"
          >
            {steps.map((step, index) => (
              <Box
                key={index}
                ref={(el: HTMLDivElement | null) => {
                  (stepRefs.current as (HTMLDivElement | null)[])[index] = el;
                }}
                display="flex"
                gap={3}
                alignItems="center"
              >
                <Box
                  bgcolor="#090A13"
                  borderRadius={4}
                  padding={3}
                  display="flex"
                  alignItems="center"
                  gap={4}
                  position="relative"
                  sx={{
                    ':after': {
                      display: index === 0 ? 'none' : 'block',
                      content: '""',
                      position: 'absolute',
                      height: 100,
                      width: '1px',
                      backgroundColor: activeSteps[index] ? '#1F53FF' : 'gray',
                      bottom: { xs: 65, md: 78 },
                      right: 32,
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    fontSize={{ xs: '0.825rem', md: '1.45rem' }}
                  >
                    {step.title}
                  </Typography>
                  <Box
                    sx={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '50%',
                      background: activeSteps[index] ? '#1F53FF' : '#444',
                      boxShadow: activeSteps[index] ? '0 0 12px #1F53FF' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  ></Box>
                </Box>
                <Typography
                  variant="h6"
                  width={{ xs: 150, md: 220 }}
                  color="text.disabled"
                  fontSize={{ xs: '0.825rem', md: '1rem' }}
                >
                  {step.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={{ xs: 4, md: 8 }}>
          <Button component="a" href="/roadmap" variant="contained">
            MORE
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Roadmap;
