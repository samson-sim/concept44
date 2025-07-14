'use client';
import Step from '@/components/Step';
import SEO from '@/components/SEO';
import { HEADER_HEIGHT } from '@/constants';
import { Box, Container, Typography } from '@mui/material';

const roadmapSteps = [
  {
    image: '/step1.png',
    title: 'GOALS',
    steps: [
      'Defining the project’s goals and mission',
      'Identifying the target audience and market needs',
      'Researching competitors and market trends',
      'Developing a unique value proposition (UVP)',
      'SWOT analysis to assess readiness (C44)',
      'Creating a preliminary business plan',
    ],
  },
  {
    image: '/step2.png',
    title: 'PLANNING',
    steps: [
      'Developing a clear roadmap',
      'Selecting optimal resources and technologies',
      'Budget planning and securing funding',
      'Assembling the project and engineering teams',
      'Creating prototypes and mockups',
      'Presenting and finalizing the concept',
    ],
  },
  {
    image: '/step3.png',
    title: 'DEVELOPMENT',
    steps: [
      'Initiating project work with sprint setting',
      'Developing the technical infrastructure (MVP)',
      'Configuring the technical infrastructure',
      'Building the first functional MVP version',
      'Quality control, testing, and reworks',
      'Fixing bugs and implementing improvements',
      'Completing the core development phase',
    ],
  },
  {
    image: '/step4.png',
    title: 'DESIGN',
    steps: [
      'Developing the brand identity and logo',
      'Designing the user interface (UI)',
      'Creating UX design and ensuring usability',
      'Preparing web and graphic assets and materials',
      'Illustrations, animations, and video content',
      'Preparing visual content for marketing',
    ],
  },
  {
    image: '/step5.png',
    title: 'TESTING',
    steps: [
      'Conducting closed testing with initial users',
      'Performing stress tests and audits',
      'Analyzing feedback and identifying flaws',
      'Fixing bugs and issues',
      'Finalizing technical documentation',
      'Preparing for the official release',
    ],
  },
  {
    image: '/step6.png',
    title: 'LAUNCH',
    steps: [
      'Developing a marketing strategy',
      'Creating advertising campaigns',
      'Launching the MVP',
      'Gathering feedback from investors and early',
      'Optimizing the MVP after launch',
      'Analyzing initial data and user feedback',
    ],
  },
  {
    image: '/step7.png',
    title: 'SCALING',
    steps: [
      'Expanding project functionality based',
      'Implementing new features and updates',
      'Expanding user acquisition and support',
      'Exploring new markets and expansion strategies',
    ],
  },
  {
    image: '/step8.png',
    title: 'SUPPORT',
    steps: ['Continuous project development', 'Scaling the solutions and expanding to '],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <SEO
        title="Project Roadmap | Concept 44"
        description="Explore the step-by-step roadmap for blockchain and Web3 project development at Concept 44. From goals to launch and support, see our transparent process."
        image="/step1.png"
        url="https://concept44.com/roadmap"
      />
      <Container maxWidth="lg">
        <Box
          display="flex"
          minHeight={`calc(100vh - ${HEADER_HEIGHT}px)`}
          justifyContent="center"
          alignItems="center"
          py={{ xs: 5, md: 10 }}
          pb={{ xs: 15, md: 10 }}
        >
          <Box>
            <Typography variant="h4" color="#6589FF" letterSpacing={10} textAlign="center">
              TECHNOLOGIES
            </Typography>
            <Typography variant="h1" mb={2} textAlign="center">
              CONCEPT 44
            </Typography>
            <Typography variant="h5" color="text.disabled" textAlign="center" mb={10}>
              We are a team of professionals specializing
              <br />
              in the development and implementation
            </Typography>
            {roadmapSteps.map((step, index) => (
              <Step
                key={index}
                index={index}
                image={step.image}
                title={step.title}
                steps={step.steps}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
}
