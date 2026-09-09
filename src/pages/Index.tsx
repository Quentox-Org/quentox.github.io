import { Box } from "@mui/material";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
// import { TrustedBySection } from "../components/TrustedBySection";
import { ServicesSection } from "../components/ServicesSection";
import { IndustriesSection } from "../components/IndustriesSection";
import { ProductsSection } from "../components/ProductsSection";
// import { CaseStudiesSection } from "../components/CaseStudiesSection";
import { CompanySection } from "../components/CompanySection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Header />

      <Box component="main">
        <HeroSection />
        {/* <TrustedBySection /> */}
        <ServicesSection />
        <IndustriesSection />
        <ProductsSection />
        {/* <CaseStudiesSection /> */}
        <CompanySection />
      </Box>

      <Footer />
    </Box>
  );
};

export default Index;
