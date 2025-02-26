import { Box, CircularProgress, Alert } from "@mui/material";
const LoadingOrError = ({ isLoading, error }) => {
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Alert severity="error">Error: {error.message}</Alert>
      </Box>
    );
  }
  return null;
};

export default LoadingOrError;
