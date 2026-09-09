import React from "react";
import { Button, Box, Typography, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import heroImage from "../assets/image.png";

export const HeroSection: React.FunctionComponent = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 5,
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, hsl(var(--background)), hsl(var(--background) / 0.95), transparent)',
          }}
        />
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ maxWidth: '42rem' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3rem', lg: '3.75rem' },
              fontWeight: 'bold',
              color: 'text.primary',
              mb: 3,
            }}
          >
            Engineering Software, Augmented by AI
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.125rem', md: '1.25rem' },
              color: 'text.secondary',
              mb: 4,
              lineHeight: 1.75,
            }}
          >
            We build scalable, high-quality software with integrity and real ownership. Our founding team has worked together for over a decade, combining deep domain expertise with AI-augmented development to deliver real business value.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                py: 2,
                px: 4,
                fontSize: '1.125rem',
                fontWeight: 600,
                boxShadow: 3,
                '&:hover': {
                  bgcolor: 'primary.dark',
                  boxShadow: 6,
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Let's Talk
            </Button>
            
            <Button
              component={RouterLink}
              to="/#services"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'hsl(var(--foreground))',
                borderWidth: 2,
                color: 'hsl(var(--foreground))',
                py: 2,
                px: 4,
                fontSize: '1.125rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'hsl(var(--foreground))',
                  bgcolor: 'hsl(var(--foreground) / 0.1)',
                  borderWidth: 2,
                },
                transition: 'all 0.3s ease',
              }}
            >
              Our Services
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
