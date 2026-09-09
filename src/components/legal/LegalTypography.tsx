import React from "react";
import { Box, Link, List, ListItem, Typography } from "@mui/material";

export const legalTitleSx = {
  fontSize: { xs: "2rem", md: "2.5rem", lg: "3rem" },
  fontWeight: 700,
  color: "text.primary",
  mb: 2,
};

export const legalSectionSx = {
  fontSize: { xs: "1.25rem", md: "1.5rem" },
  fontWeight: 600,
  color: "text.primary",
  mt: 4,
  mb: 2,
};

export const legalSubsectionSx = {
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "text.primary",
  mt: 3,
  mb: 1.5,
};

export const legalBodySx = {
  color: "text.secondary",
  lineHeight: 1.75,
  mb: 3,
};

export const legalIntroSx = {
  fontSize: "1.125rem",
  color: "text.secondary",
  lineHeight: 1.75,
  mb: 4,
};

export const LegalTitle: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Typography variant="h1" sx={legalTitleSx}>
    {children}
  </Typography>
);

export const LegalSection: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Typography variant="h2" component="h3" sx={legalSectionSx}>
    {children}
  </Typography>
);

export const LegalSubsection: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Typography variant="h3" component="h4" sx={legalSubsectionSx}>
    {children}
  </Typography>
);

export const LegalParagraph: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Typography variant="body1" sx={legalBodySx}>
    {children}
  </Typography>
);

export const LegalIntro: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Typography variant="body1" sx={legalIntroSx}>
    {children}
  </Typography>
);

export const LegalList: React.FunctionComponent<{ items: React.ReactNode[] }> = ({
  items,
}) => (
  <List
    component="ul"
    sx={{
      color: "text.secondary",
      lineHeight: 1.75,
      mb: 3,
      pl: 2,
      listStyleType: "disc",
      "& .MuiListItem-root": {
        display: "list-item",
        py: 0.5,
        pl: 1,
      },
    }}
  >
    {items.map((item, index) => (
      <ListItem key={index} component="li" disablePadding>
        <Box component="span">{item}</Box>
      </ListItem>
    ))}
  </List>
);

export const LegalEmailLink: React.FunctionComponent = () => (
  <Link
    href="mailto:info@quentox.com"
    sx={{
      color: "primary.main",
      textDecoration: "none",
      "&:hover": { textDecoration: "underline" },
    }}
  >
    info@quentox.com
  </Link>
);
