import React from "react";
import { Box, Typography, Container } from "@mui/material";
import solargridaiLogo from "../assets/trusted-by/solargridai.png";

const logos = [
  { name: "SolarGridAI", src: solargridaiLogo },
];

export const TrustedBySection: React.FunctionComponent = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 4,
        bgcolor: 'action.hover',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          sx={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'text.primary',
            mb: 4,
          }}
        >
          Trusted By
        </Typography>

        <Box
          sx={{
            borderTop: 1,
            borderColor: 'divider',
            pt: 4,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 4, md: 6 },
            }}
          >
            {logos.map((logo) => (
              <Box
                key={logo.name}
                sx={{
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  opacity: 0.6,
                  '&:hover': {
                    opacity: 1,
                  },
                  transition: 'opacity 0.3s ease',
                }}
              >
                <Box
                  component="img"
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  sx={{
                    height: '100%',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
