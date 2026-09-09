import React from "react";
import { Box, Container } from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PrivacyPolicy } from "../components/PrivacyPolicy";

export const PrivacyPolicyPage: React.FunctionComponent = () => {
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
          <PrivacyPolicy />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};
