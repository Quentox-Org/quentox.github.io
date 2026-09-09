import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid2 as Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

export const ContactPage: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Header />

      <Box component="main" sx={{ pt: "80px" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
          <Box sx={{ mb: { xs: 4, md: 6 }, maxWidth: "42rem" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
                fontWeight: 700,
                color: "text.primary",
                mb: 2,
              }}
            >
              Contact us
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "text.secondary",
                lineHeight: 1.75,
              }}
            >
              Tell us about your project, and our team will get back to you to
              discuss how we can help.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, lg: 6 }}>
            <Grid size={{ xs: 12, lg: 5 }}>
              <Stack spacing={3}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    fontWeight: 600,
                    color: "text.primary",
                  }}
                >
                  Get in touch
                </Typography>

                <Stack spacing={2.5}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Phone sx={{ fontSize: 22, color: "hsl(var(--primary))" }} />
                    <Link
                      href="tel:+359893642219"
                      sx={{
                        fontSize: "1rem",
                        color: "text.secondary",
                        textDecoration: "none",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      +359 893 642219
                    </Link>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Email sx={{ fontSize: 22, color: "hsl(var(--primary))" }} />
                    <Link
                      href="mailto:info@quentox.com"
                      sx={{
                        fontSize: "1rem",
                        color: "text.secondary",
                        textDecoration: "none",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      info@quentox.com
                    </Link>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                    <LocationOn
                      sx={{ fontSize: 22, color: "hsl(var(--primary))", mt: 0.25 }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary", lineHeight: 1.75 }}
                    >
                      Sofia Tech Park, Bulgaria
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, lg: 7 }}>
              <Card
                sx={{
                  border: 1,
                  borderColor: "divider",
                  borderRadius: 3,
                  boxShadow: "none",
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 }, "&:last-child": { pb: { xs: 3, md: 4 } } }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      fontWeight: 600,
                      color: "text.primary",
                      mb: 3,
                    }}
                  >
                    Send us a message
                  </Typography>
                  <ContactForm />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};
