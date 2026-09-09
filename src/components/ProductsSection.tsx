import React from "react";
import { DirectionsCar } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Link,
  Typography,
} from "@mui/material";

export const ProductsSection: React.FunctionComponent = () => {
  return (
    <Box
      component="section"
      id="products"
      sx={{
        py: 6,
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: "bold",
              color: "text.primary",
              mb: 2,
            }}
          >
            Products
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "text.secondary",
            }}
          >
            Innovative platforms built by Quentox to solve real-world industry
            challenges.
          </Typography>
        </Box>

        <Card
          sx={{
            border: 1,
            borderLeft: 4,
            borderRadius: 3,
            borderColor: "divider",
            borderLeftColor: "primary.main",
            bgcolor: "hsl(var(--primary) / 0.04)",
            boxShadow: "var(--shadow-soft)",
            "&:hover": {
              borderColor: "primary.main",
              boxShadow: "var(--shadow-medium)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 }, "&:last-child": { pb: { xs: 3, md: 4 } } }}>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 3, mb: 3 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2,
                  bgcolor: "#42a5f529",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <DirectionsCar sx={{ fontSize: 28, color: "hsl(var(--primary))" }} />
              </Box>

              <Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1, flexWrap: "wrap" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: "1.5rem", md: "1.875rem" },
                      fontWeight: 600,
                      color: "text.primary",
                    }}
                  >
                    AutoDiag
                  </Typography>
                  <Chip
                    label="In development"
                    size="small"
                    sx={{
                      bgcolor: "hsl(var(--muted))",
                      color: "text.secondary",
                      fontWeight: 500,
                    }}
                  />
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                >
                  Automotive diagnostics platform
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.75,
                mb: 2,
              }}
            >
              AutoDiag is an innovative platform designed for the automotive sector,
              targeted primarily to car owners, automotive repair shops and
              dealerships. Our platform interfaces with vehicle systems through a
              specialized device connected to the OBD2 port. Utilizing advanced
              machine learning models, it analyzes data from these systems to detect
              deviations from the expected optimal operation.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.75,
                mb: 3,
              }}
            >
              Given that fundamental functionality the platform enables many
              additional features to the end users like predictive maintenance or
              potential issues identification by correlating diagnostic data to
              historical data or data from other vehicles.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.75,
              }}
            >
              The platform is still in development. For more information contact us
              at{" "}
              <Link
                href="mailto:info@quentox.com"
                sx={{
                  color: "primary.main",
                  textDecoration: "none",
                  fontWeight: 500,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                info@quentox.com
              </Link>
              .
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
