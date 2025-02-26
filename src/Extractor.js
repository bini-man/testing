import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { styled } from '@mui/system';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1E90FF', // Blue color
    },
    secondary: {
      main: '#FFD700', // Yellow color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Set default font
    h5: {
      fontWeight: 600, // Make headings bolder
    },
  },
});

// Style the container
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9', // Light background color
}));

function Extractor() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showData, setShowData] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }
    setShowData(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Upload ID Image
            </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ marginBottom: '1rem' }} // Add margin below input
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              disabled={!selectedFile}
            >
              Upload
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Extracted ID Data
            </Typography>
            {showData && (
              <Box>
                <TextField
                  label="Name"
                  value="John Doe"
                  fullWidth
                  margin="normal"
                  disabled
                />
                <TextField
                  label="ID Number"
                  value="1234567890"
                  fullWidth
                  margin="normal"
                  disabled
                />
                <TextField
                  label="Date of Birth"
                  value="January 1, 1990"
                  fullWidth
                  margin="normal"
                  disabled
                />
                <TextField
                  label="Nationality"
                  value="American"
                  fullWidth
                  margin="normal"
                  disabled
                />
                {/* Add more static fields as needed */}
              </Box>
            )}
            {!showData && (
              <Typography>No data extracted yet.</Typography>
            )}
          </Grid>
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default Extractor;