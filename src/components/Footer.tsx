import React from "react";
import {
  LinkedIn,
 // Facebook,
 // Instagram,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";
import { Box, Link, Container, Grid2 as Grid, Typography, IconButton, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logoWhite from "../assets/logo_bw.svg";

const footerLinks = {
  services: [
    "Custom Software Development",
    "AI-Augmented Engineering",
    "System Integrations",
    "Cloud Solutions & Architecture",
  ],
  industries: [
    "Fintech & Banking",
    "Energy Infrastructure",
    "Travel & Hospitality",
  ],
  company: [
    "Who We Are",
    "Leadership Team",
  ],
};

export const Footer: React.FunctionComponent = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'hsl(var(--foreground))',
        color: 'hsl(var(--background))',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={{ xs: 4, lg: 6 }}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Link component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', mb: 2 }}>
              <Box
                component="img"
                src={logoWhite}
                alt="Quentox"
                sx={{
                  height: 40,
                  width: 'auto',
                }}
              />
            </Link>

            <Stack spacing={1.5} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 18, color: 'hsl(var(--background) / 0.6)' }} />
                <Link
                  href="tel:+359893642219"
                  sx={{
                    fontSize: '0.875rem',
                    color: 'hsl(var(--background) / 0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  +359 893 642219
                </Link>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: 18, color: 'hsl(var(--background) / 0.6)' }} />
                <Link
                  href="mailto:info@quentox.com"
                  sx={{
                    fontSize: '0.875rem',
                    color: 'hsl(var(--background) / 0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  info@quentox.com
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOn sx={{ fontSize: 18, color: 'hsl(var(--background) / 0.6)', mt: 0.25 }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: 'hsl(var(--background) / 0.7)',
                    fontSize: '0.875rem',
                  }}
                >
                  Sofia Tech Park, Bulgaria
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={2}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/quentox"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'hsl(var(--background) / 0.6)',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <LinkedIn sx={{ fontSize: 20 }} />
              </IconButton>
{/* 
              <IconButton
                href="#"
                sx={{
                  color: 'hsl(var(--background) / 0.6)',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <Facebook sx={{ fontSize: 20 }} />
              </IconButton>
              
              <IconButton
                href="#"
                sx={{
                  color: 'hsl(var(--background) / 0.6)',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <Instagram sx={{ fontSize: 20 }} />
              </IconButton>
               */}
            </Stack>
          </Grid>

          {/* Services Column */}
          <Grid size={{ xs: 6, md: 3, lg: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Services
            </Typography>

            <Stack spacing={1.5}>
              {footerLinks.services.map((link) => (
                <Link
                  key={link}
                  component={RouterLink}
                  to="/#services"
                  sx={{
                    fontSize: '0.875rem',
                    color: 'hsl(var(--background) / 0.7)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Industries Column */}
          <Grid size={{ xs: 6, md: 3, lg: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Industries
            </Typography>

            <Stack spacing={1.5}>
              {footerLinks.industries.map((link) => (
                <Link
                  key={link}
                  component={RouterLink}
                  to="/#industries"
                  sx={{
                    fontSize: '0.875rem',
                    color: 'hsl(var(--background) / 0.7)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Company Column */}
          <Grid size={{ xs: 12, md: 3, lg: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>

            <Stack spacing={1.5}>
              {footerLinks.company.map((link) => (
                <Link
                  key={link}
                  component={RouterLink}
                  to="/#company"
                  sx={{
                    fontSize: '0.875rem',
                    color: 'hsl(var(--background) / 0.7)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: 1,
            borderColor: 'hsl(var(--background) / 0.1)',
            mt: 4,
            pt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.875rem',
              color: 'hsl(var(--background) / 0.6)',
            }}
          >
            © {new Date().getFullYear()} Quentox JSC. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={3}>
            <Link
              component={RouterLink}
              to="/privacy"
              sx={{
                fontSize: '0.875rem',
                color: 'hsl(var(--background) / 0.6)',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Privacy Policy
            </Link>
            
            <Link
              component={RouterLink}
              to="/cookies"
              sx={{
                fontSize: '0.875rem',
                color: 'hsl(var(--background) / 0.6)',
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Cookie Policy
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
