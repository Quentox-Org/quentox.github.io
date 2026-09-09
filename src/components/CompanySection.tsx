import React from "react";
import { Box, Typography, Container, Grid2 as Grid, Card, CardContent } from "@mui/material";
import rosenDochev from "../assets/leadership-team/DSC_5703.jpg";
import diyanDoychev from "../assets/leadership-team/DSC_5735.jpg";
import ivanBratanov from "../assets/leadership-team/DSC_5770.jpg";

const leadershipTeam = [
  { name: "Rosen Dochev", position: "Managing Director", image: rosenDochev },
  { name: "Diyan Doychev", position: "Head of Technical Delivery", image: diyanDoychev },
  { name: "Ivan Bratanov", position: "Head of Integrations", image: ivanBratanov },
];
export const CompanySection: React.FunctionComponent = () => {
  return (
    <Box
      component="section"
      id="company"
      sx={{
        py: 6,
        bgcolor: "action.hover",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: "bold",
              color: "text.primary",
              mb: 2,
            }}
          >
            Company
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.125rem",
              color: "text.secondary",
              mb: 4,
            }}
          >
            The people and principles behind Quentox.
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontWeight: 600,
              color: "text.primary",
              mb: 3,
            }}
          >
            Who We Are
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.75,
              mb: 2,
            }}
          >
            At Quentox, our founders are a close-knit team of four experienced professionals who have worked together for over a decade. Each member brings a unique blend of management and technical skills, creating a dynamic synergy. Our diverse backgrounds and extensive experience empower us to develop innovative software solutions that push the boundaries of technology.
          </Typography>

        </Box>

        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontWeight: 600,
              color: "text.primary",
              mb: 3,
            }}
          >
            Leadership Team
          </Typography>

          <Grid container spacing={3} sx={{ width: '100%', justifyContent: 'space-between' }}>
            {leadershipTeam.map((member) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={member.name}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 3,
                    overflow: "hidden",
                    bgcolor: "background.paper",
                    "&:hover": {
                      borderColor: "primary.main",
                      boxShadow: 4,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', height: '100%', '&:last-child': { pb: 0 } }}>
                    <Box
                      sx={{
                        width: "100%",
                        flex: 1,
                        minHeight: 300,
                        bgcolor: "action.hover",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={member.image}
                        alt={member.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          minHeight: 300,
                          objectFit: "cover",
                          objectPosition: "top center",
                          display: "block",
                        }}
                      />
                    </Box>                    
                    <Box
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        bgcolor: 'background.paper',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: '1.125rem',
                          fontWeight: 600,
                          color: 'text.primary',
                          mb: 1,
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        {member.position}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};
