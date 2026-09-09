import React from "react";
import {
  Code,
  Psychology,
  Cloud,
  Settings,
} from "@mui/icons-material";
import { Box, Typography, Container, Grid2 as Grid, Card, CardContent } from "@mui/material";

const services = [
  {
    icon: Code,
    title: "Tailored Software Development",
    description: "We design and deliver software tailored to your business needs, combining deep domain expertise with proven engineering practices. Every solution is built with reliability, scalability, and maintainability in mind, ensuring long-term value. Our team manages every stage — from concept through implementation to deployment of the final product.",
  },
  {
    icon: Psychology,
    title: "AI-Augmented Engineering",
    description: "AI is embedded into our development process to enhance productivity, code quality, and decision-making, not to replace human expertise. We leverage generative AI tools responsibly to accelerate delivery, while our engineers retain full control over design, implementation, and validation. This approach allows us to address complex challenges more efficiently, without lowering engineering standards.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Architecture",
    description: "We design and deliver cloud architectures across all major cloud providers, including Oracle Cloud, tailored to organizational and operational requirements. Our experience spans cloud-native systems as well as migrations from on-premise environments to the cloud, with a strong focus on risk reduction and operational continuity. Cloud architectures are designed with security, scalability, and reliability as core principles, while cost efficiency is continuously evaluated to ensure long-term sustainability. Architectural decisions are guided by performance, operability, and alignment with business objectives.",
  },
  {
    icon: Settings,
    title: "System Integrations",
    description: "With years of experience connecting diverse systems, we specialize in integrating ERP platforms, Property Management Systems (PMS), Central Reservation Systems (CRS) such as Amadeus, Revenue Management Systems (RMS), channel managers, and more. We deliver integrations through both traditional coding and modern low-code platforms such as Oracle Integration Cloud. This approach enables rapid delivery while ensuring reliability and scalability. Our integrations guarantee seamless data exchange and processing at high volumes. We take responsibility for the entire integration lifecycle, delivering stable, secure, and maintainable system integrations.",
  }
];

export const ServicesSection: React.FunctionComponent = () => {
  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: 6,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 2,
            }}
          >
            End-to-end Software Development Services
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: 'text.secondary',
            }}
          >
            From custom software development to cloud architecture and system integrations, we deliver comprehensive solutions that drive business growth and operational excellence. Our expertise spans the entire technology stack, ensuring seamless delivery from concept to deployment.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid size={{ xs: 12, md: 6 }} key={service.title}>
              <Card
                sx={{
                  height: '100%',
                  border: 1,
                  borderRadius: 3,
                  borderColor: 'divider',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: 4,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      bgcolor: '#42a5f529',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      '&:hover': {
                        bgcolor: 'primary.main',
                      },
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <service.icon sx={{ fontSize: 28, color: 'hsl(var(--primary))' }} />
                  </Box>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'text.primary',
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.75,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
