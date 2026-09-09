import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  Button,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import {
  KeyboardArrowDown,
  Menu as MenuIcon,
  Close,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import logoQuentox from "../assets/logo-quentox.png";

const services = [
  { title: "Custom Software Development", description: "Custom software solutions tailored to your needs" },
  { title: "AI-Augmented Engineering", description: "Leverage artificial intelligence to enhance engineering processes and deliver intelligent solutions" },
  { title: "System Integrations", description: "Seamlessly connect and integrate diverse systems for unified operations" },
  { title: "Cloud Solutions & Architecture", description: "Design and implement scalable cloud infrastructure and migration strategies" },
];

const industries = [
  { title: "Fintech & Banking", description: "Digital transformation solutions for financial institutions and banking systems" },
  { title: "Energy Infrastructure", description: "Smart energy management and infrastructure modernization solutions" },
  { title: "Travel & Hospitality", description: "Technology solutions to enhance guest experiences and operational efficiency" },
];

const company = [
  { title: "Who We Are", description: "Learn about our company and our mission" },
  { title: "Leadership Team", description: "Meet the team that drives our success" },
];

export const Header: React.FunctionComponent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(null);
  const [industriesAnchor, setIndustriesAnchor] = useState<null | HTMLElement>(null);
  const [companyAnchor, setCompanyAnchor] = useState<null | HTMLElement>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const handleServicesOpen = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchor(event.currentTarget);
  };
  const handleServicesClose = () => {
    setServicesAnchor(null);
  };

  const handleIndustriesOpen = (event: React.MouseEvent<HTMLElement>) => {
    setIndustriesAnchor(event.currentTarget);
  };
  const handleIndustriesClose = () => {
    setIndustriesAnchor(null);
  };

  const handleCompanyOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCompanyAnchor(event.currentTarget);
  };

  const handleCompanyClose = () => {
    setCompanyAnchor(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    setMobileCompanyOpen(false);
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        bgcolor: 'hsl(var(--background) / 0.95)',
        backdropFilter: 'blur(4px)',
        borderBottom: 1,
        borderColor: 'hsl(var(--border))',
      }}
    >
      <Box className="section-container">
        <Box
          component="nav"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 80,
          }}
        >
          {/* Logo */}
          <Link component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <Box
              component="img"
              src={logoQuentox}
              alt="Quentox"
              sx={{
                height: 40,
                width: 'auto',
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            {/* <SimpleMenu menuName="Services" items={services.map((service) => ({
              label: service.title,
              path: `#${service.title.toLowerCase()}`,
              component: () => <div>{service.title}</div>,
            }))} /> */}
            
            <Button
              onClick={handleServicesOpen}
              sx={{
                textTransform: 'none',
                color: 'hsl(var(--foreground))',
                bgcolor: 'transparent',
                '&:hover': {
                  bgcolor: 'hsl(var(--muted))',
                },
              }}
            >
              Services <KeyboardArrowDown sx={{ fontSize: 12, ml: 0.5 }} />
            </Button>

            <Menu
              anchorEl={servicesAnchor}
              open={Boolean(servicesAnchor)}
              disableScrollLock
              onClose={handleServicesClose}
            >
              <Box sx={{ p: 1, display: 'grid', gridTemplateColumns: '1fr' }}>
                {services.map((service) => (
                  <MenuItem
                    key={service.title}
                    component={RouterLink}
                    to="/#services"
                    onClick={handleServicesClose}
                    sx={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      py: 0.75,
                      px: 0.75,
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <Box sx={{ fontSize: '0.875rem', fontWeight: 500, mb: 0.5 }}>
                      {service.title}
                    </Box>
                  </MenuItem>
                ))}
              </Box>
            </Menu>

            <Button
              sx={{
                textTransform: 'none',
                color: 'hsl(var(--foreground))',
                bgcolor: 'transparent',
                '&:hover': {
                  bgcolor: 'hsl(var(--muted))',
                },
              }}
              onClick={handleIndustriesOpen}
            >
              Industries <KeyboardArrowDown sx={{ fontSize: 12, ml: 0.5 }} />
            </Button>

            <Menu
              anchorEl={industriesAnchor}
              open={Boolean(industriesAnchor)}
              disableScrollLock
              onClose={handleIndustriesClose}
            >
              <Box sx={{ p: 1, display: 'grid', gridTemplateColumns: '1fr' }}>
                {industries.map((industry) => (
                  <MenuItem
                    key={industry.title}
                    component={RouterLink}
                    to="/#industries"
                    onClick={handleIndustriesClose}
                    sx={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      py: 0.75,
                      px: 0.75,
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <Box sx={{ fontSize: '0.875rem', fontWeight: 500, mb: 0.5 }}>
                      {industry.title}
                    </Box>
                  </MenuItem>
                ))}
              </Box>
            </Menu>

            <Button
              component={RouterLink}
              to="/#products"
              sx={{
                textTransform: 'none',
                color: 'hsl(var(--foreground))',
                bgcolor: 'transparent',
                '&:hover': {
                  bgcolor: 'hsl(var(--muted))',
                },
              }}
            >
              Products
            </Button>

            <Button
              onClick={handleCompanyOpen}
              sx={{
                textTransform: 'none',
                color: 'hsl(var(--foreground))',
                bgcolor: 'transparent',
                '&:hover': {
                  bgcolor: 'hsl(var(--muted))',
                },
              }}
            >
              Company <KeyboardArrowDown sx={{ fontSize: 12, ml: 0.5 }} />
            </Button>
            
            <Menu
              anchorEl={companyAnchor}
              open={Boolean(companyAnchor)}
              disableScrollLock
              onClose={handleCompanyClose}
            >
              <Box sx={{ p: 1, display: 'grid', gridTemplateColumns: '1fr' }}>
                {company.map((company) => (
                  <MenuItem
                    key={company.title}
                    component={RouterLink}
                    to="/#company"
                    onClick={handleCompanyClose}
                    sx={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      py: 0.75,
                      px: 0.75,
                      '&:hover': { bgcolor: 'action.hover' },
                    }}
                  >
                    <Box sx={{ fontSize: '0.875rem', fontWeight: 500, mb: 0.5 }}>
                      {company.title}
                    </Box>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>

          {/* CTA Button - Desktop */}
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'hsl(var(--foreground))',
                color: 'hsl(var(--background))',
                '&:hover': {
                  bgcolor: 'hsl(var(--foreground) / 0.9)',
                },
              }}
            >
              Contact us
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: 'flex', lg: 'none' } }}
            onClick={handleMobileMenuToggle}
            aria-label="menu"
          >
            {mobileMenuOpen ? <Close /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        ModalProps={{
          disableScrollLock: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: 320,
          },
        }}
      >
        <Box sx={{ pt: 2 }}>
          <List>
            {/* Services */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                <ListItemText primary="Services" />
                {mobileServicesOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {services.map((service) => (
                  <ListItemButton
                    key={service.title}
                    component={RouterLink}
                    to="/#services"
                    onClick={handleMobileMenuClose}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText
                      primary={service.title}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            {/* Industries */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}>
                <ListItemText primary="Industries" />
                {mobileIndustriesOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            <Collapse in={mobileIndustriesOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {industries.map((industry) => (
                  <ListItemButton
                    key={industry.title}
                    component={RouterLink}
                    to="/#industries"
                    onClick={handleMobileMenuClose}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText
                      primary={industry.title}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            {/* Products */}
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                to="/#products"
                onClick={handleMobileMenuClose}
              >
                <ListItemText primary="Products" />
              </ListItemButton>
            </ListItem>

            {/* Company */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}>
                <ListItemText primary="Company" />
                {mobileCompanyOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            
            <Collapse in={mobileCompanyOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {company.map((item) => (
                  <ListItemButton
                    key={item.title}
                    component={RouterLink}
                    to="/#company"
                    onClick={handleMobileMenuClose}
                    sx={{ pl: 4 }}
                  >
                    <ListItemText
                      primary={item.title}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <Divider sx={{ my: 1 }} />

            {/* Contact us */}
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                to="/contact"
                onClick={handleMobileMenuClose}
                sx={{
                  bgcolor: 'hsl(var(--foreground))',
                  color: 'hsl(var(--background))',
                  mx: 2,
                  mb: 2,
                  borderRadius: 1,
                  '&:hover': {
                    bgcolor: 'hsl(var(--foreground) / 0.9)',
                  },
                }}
              >
                <ListItemText primary="Contact us" sx={{ textAlign: 'center' }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
