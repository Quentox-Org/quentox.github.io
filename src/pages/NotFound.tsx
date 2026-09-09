import { useLocation, Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'action.hover',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1" sx={{ mb: 2, fontSize: '2.5rem', fontWeight: 'bold' }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ mb: 2, color: 'text.secondary' }}>
          Oops! Page not found
        </Typography>
        <Link component={RouterLink} to="/" sx={{ color: 'primary.main', textDecoration: 'underline', '&:hover': { color: 'primary.dark' } }}>
          Return to Home
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
