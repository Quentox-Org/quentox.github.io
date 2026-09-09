import React from "react";
import { ArrowForward } from "@mui/icons-material";
import { Button, Box, Typography, Container, Grid, Card, CardContent, Link, Chip } from "@mui/material";

const caseStudies = [
  {
    category: "Energy Infrastructure",
    title: "SolarGridAI",
    description: "A solution for maintaining predictable energy output.",
    gradient: "from-primary/20 to-accent/20",
  },
];

export const CaseStudiesSection: React.FunctionComponent = () => {
  return (
    <Box
      component="section"
      id="success-stories"
      sx={{
        py: 6,
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'flex-end' },
            justifyContent: 'space-between',
            mb: 4,
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 'bold',
                color: 'text.primary',
                mb: 2,
              }}
            >
              Success Stories
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'text.secondary',
                maxWidth: '36rem',
              }}
            >
              Explore our successful projects.
            </Typography>
          </Box>

          <Button 
            variant="outlined" 
            size="large"
            endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                bgcolor: 'primary.light',
              },
            }}
          >
            View All Cases
          </Button>
        </Box>

        <Grid container spacing={3}>
          {caseStudies.map((study, _index) => (
            <Grid item xs={12} md={4} key={study.title}>
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: 1,
                  borderColor: 'divider',
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Box
                  sx={{
                    height: 192,
                    background: `linear-gradient(to bottom right, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2))`,
                  }}
                />
                <CardContent sx={{ p: 3 }}>
                  <Chip
                    label={study.category}
                    size="small"
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'primary.main',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      mb: 1,
                    }}
                  />

                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      mt: 1,
                      mb: 2,
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {study.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.875rem',
                      lineHeight: 1.75,
                      mb: 2,
                    }}
                  >
                    {study.description}
                  </Typography>

                  <Link
                    href="#"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                      '& .MuiSvgIcon-root': {
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover .MuiSvgIcon-root': {
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    Read case study
                    <ArrowForward 
                      sx={{ 
                        fontSize: 16, 
                        ml: 0.5,
                      }} 
                    />
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
