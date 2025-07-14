'use client';
import { FC, useEffect, useRef, useState } from 'react';
import { Grid, Box, Typography, useMediaQuery, Container } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Step: FC<{ image: string; title: string; steps: string[]; index: number }> = ({
  index: stepIndex,
  image,
  title,
  steps,
}) => {
  const isMd = useMediaQuery('(min-width: 900px)');
  const isXl = useMediaQuery('(min-width: 1640px)');

  const stepRef = useRef(null);
  const subStepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [activeSubSteps, setActiveSubSteps] = useState<boolean[]>([]);

  useEffect(() => {
    setActiveSubSteps(new Array(steps.length).fill(false));

    if (stepRef.current) {
      ScrollTrigger.create({
        trigger: stepRef.current,
        start: isXl ? 'top center+=500' : isMd ? 'top center+=220' : 'top center+=50',
        onEnter: () => setIsActive(true),
        onLeaveBack: () => setIsActive(false),
      });
    }

    subStepRefs.current.forEach((subStep, index) => {
      if (subStep) {
        ScrollTrigger.create({
          trigger: subStep,
          start: isXl ? 'top center+=500' : isMd ? 'top center+=220' : 'top center+=50',
          onEnter: () => {
            setActiveSubSteps((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          },
          onLeaveBack: () => {
            setActiveSubSteps((prev) => {
              const updated = [...prev];
              updated[index] = false;
              return updated;
            });
          },
        });
      }
    });
  }, [steps.length, isXl, isMd]);

  return (
    <Container>
      <Box ref={stepRef} paddingTop={stepIndex === 0 ? 0 : '62px'}>
        <Grid container mb={stepIndex === 7 ? '0px' : '58px'}>
          <Grid size={{ md: 6 }} display="flex" justifyContent="flex-end" ml={{ xs: 0, md: 5 }}>
            <Box
              bgcolor="#090A13"
              borderRadius={4}
              padding={3}
              display="flex"
              alignItems={{ xs: 'start', md: 'center' }}
              gap={4}
              position="relative"
              sx={{
                ':after': {
                  display: stepIndex === 0 ? 'none' : 'block',
                  content: '""',
                  position: 'absolute',
                  height: { xs: 68, md: stepIndex === 7 ? 220 : 70 },
                  width: '1px',
                  backgroundColor: isActive ? '#1F53FF' : 'gray',
                  bottom: { xs: 64, md: stepIndex === 7 ? 80 : 74 },
                  right: { xs: 'unset', md: 33 },
                  left: { xs: 31, md: 'unset' },
                },
              }}
            >
              <Typography
                variant="h5"
                fontWeight={600}
                order={{ xs: 2, md: 1 }}
                fontSize={{ xs: '0.825rem', md: '1.45rem' }}
              >
                {title}
              </Typography>
              <Box
                sx={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: isActive ? '#1F53FF' : '#444',
                  boxShadow: isActive ? '0 0 12px #1F53FF' : 'none',
                  transition: 'all 0.3s ease',
                  order: { xs: 1, md: 2 },
                }}
              ></Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Grid size={{ xs: 6 }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box component="img" src={image} alt={title} height={400} />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            ml={{ xs: '26px', md: 0 }}
            sx={{ mt: stepIndex === 7 ? '158px' : '0px' }}
          >
            <Box display="flex" flexDirection="column" gap={stepIndex === 7 ? '150px' : '50px'}>
              {steps.map((step, index) => (
                <Box
                  key={index}
                  ref={(el) => {
                    subStepRefs.current[index] = el as HTMLDivElement | null;
                  }}
                  display="flex"
                  gap={2}
                  alignItems="center"
                >
                  <Box
                    position="relative"
                    flexShrink={0}
                    sx={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: activeSubSteps[index] ? '#1F53FF' : '#444',
                      boxShadow: activeSubSteps[index] ? '0 0 8px #1F53FF' : 'none',
                      transition: 'all 0.3s ease',
                      ':after': {
                        content: '""',
                        position: 'absolute',
                        height: { xs: 60, md: stepIndex === 7 ? 164 : 64 },
                        width: '1px',
                        backgroundColor: activeSubSteps[index] ? '#1F53FF' : 'gray',
                        bottom: 12,
                        right: 6,
                      },
                    }}
                  ></Box>
                  <Typography
                    variant="h6"
                    color={activeSubSteps[index] ? 'text.primary' : 'text.disabled'}
                    sx={{ flex: 1 }}
                    whiteSpace="nowrap"
                    fontSize={{ xs: '0.825rem', md: '1rem' }}
                  >
                    {step}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Step;
