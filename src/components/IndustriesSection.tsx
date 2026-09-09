import React from "react";
import {
  Business,
  LocalAirport,
  EnergySavingsLeaf,
} from "@mui/icons-material";
import { Box, Typography, Container, Grid2 as Grid, Card, CardContent } from "@mui/material";

const industries = [
  {
    icon: Business,
    title: "Fintech & Banking",
    description: "Our team brings extensive experience from the financial services domain, gained through years of work on complex fintech and banking initiatives. We have delivered solutions for fraud detection, blockchain-based platforms, and digital currency systems within highly regulated and security-sensitive environments. This experience results in a pragmatic and risk-aware approach to building financial software, with a strong focus on reliability, compliance, and well-designed architectures.",
  },
  {
    icon: EnergySavingsLeaf,
    title: "Energy Infrastructure",
    description: "Operating energy infrastructure requires continuous system visibility and reliable software under real-world conditions. We bring experience in building solutions for oil and gas pipeline monitoring, as well as systems managing energy production from solar plants and large-scale battery installations. Handling high data volumes and continuous data streams, our engineering capabilities ensure stability, scalability, and operational clarity.",
  },
  {
    icon: LocalAirport,
    title: "Travel & Hospitality",
    description: "We have extensive experience in integrating complex systems across the Travel and Hospitality domain, including Property Management Systems (Opera, Protel), Central Reservation Systems (Opera CRS, Sabre SynXis), Global Distribution Systems (Amadeus, Sabre, Travelport), Revenue Management Systems, and Channel Managers. We understand the hidden complexities and subtle challenges of these integrations, ensuring data flows reliably across platforms. By handling repetitive integration work, we allow development teams to stay focused on core product innovation. Our expertise includes both traditional coding and low-code solutions, leveraging platforms such as Oracle Integration Cloud to deliver efficient, scalable, and maintainable integrations.",
  },
];

export const IndustriesSection: React.FunctionComponent = () => {
  return (
    <Box
      component="section"
      id="industries"
      sx={{
        py: 6,
        bgcolor: 'hsl(var(--foreground))',
        color: 'hsl(var(--background))',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Industries We Serve
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.125rem',
              color: 'hsl(var(--background))',
              opacity: 0.8,
            }}
          >
            We deliver specialized technology solutions across Fintech & Banking, Energy Infrastructure, and Travel & Hospitality. Our deep industry expertise enables us to understand unique challenges and deliver solutions that drive transformation and operational excellence.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {industries.map((industry) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={industry.title}>
              <Card
                sx={{
                  height: '100%',
                  bgcolor: '#323C60',
                  border: 1,
                  borderRadius: 3,
                  borderColor: 'hsl(var(--background) / 0.1)',
                  '&:hover': {
                    bgcolor: 'hsl(var(--background) / 0.15)',
                    borderColor: 'hsl(var(--background) / 0.2)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: '#42a5f529',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <industry.icon sx={{ fontSize: 24, color: 'hsl(var(--primary))' }} />
                    </Box>

                    <Box>
                      <Typography
                        variant="h6"
                        color="white"
                        sx={{
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {industry.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'hsl(var(--background))',
                          opacity: 0.7,
                          fontSize: '0.875rem',
                          mb: 2,
                        }}
                      >
                        {industry.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
