import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  ThemeProvider,
  createTheme,
  Collapse,
} from "@mui/material";
import { styled } from "@mui/system";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const theme = createTheme({
  // Your theme configuration
});

const MainContent = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

function App() {
  const [selectedFiles, setSelectedFiles] = useState();
  const [importedDocuments, setImportedDocuments] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const imageRef = useRef(null);
  const [kycOpen, setKycOpen] = useState(true);
  const [passportOpen, setPassportOpen] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleImport = () => {
    if (selectedFiles?.length > 0) {
      setImportedDocuments((prevDocuments) => [
        ...prevDocuments,
        ...selectedFiles,
      ]);
      setSelectedFiles();
    } else {
      alert("Please select files first.");
    }
  };

  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    setZoom(1);
  };

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    setZoom(1);
  };

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === importedDocuments.length - 1 ? 0 : prevImage + 1
    );
    setZoom(1);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? importedDocuments.length - 1 : prevImage - 1
    );
    setZoom(1);
  };

  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 0.2);
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(0.2, prevZoom - 0.2));
  };

  const handleKycToggle = () => {
    setKycOpen(!kycOpen);
  };

  const handlePassportToggle = () => {
    setPassportOpen(!passportOpen);
  };

  const handleFileDirectoryClick = () => {
      if(importedDocuments.length > 0) {
          const randomIndex = Math.floor(Math.random() * importedDocuments.length);
          openImageViewer(randomIndex);
      }
  }

  useEffect(() => {
    if (importedDocuments.length > 0) {
      openImageViewer(0);
    }
  }, [importedDocuments]);

  return (
    <ThemeProvider theme={theme}>
      <MainContent>
        <Grid item xs={12} md={12}>
          <Typography variant="h5" gutterBottom>
            File Directory
          </Typography>
          <List>
            <ListItemButton onClick={handleKycToggle}>
              <ListItemText primary="KYC" />
              {kycOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={kycOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton onClick={handlePassportToggle} sx={{ pl: 4 }}>
                  <ListItemText primary="Passport ID" />
                  {passportOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={passportOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 8 }} onClick={handleFileDirectoryClick}>
                      <ListItemText primary="Front" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 8 }} onClick={handleFileDirectoryClick}>
                      <ListItemText primary="Back" />
                    </ListItemButton>
                  </List>
                </Collapse>
                <ListItemButton sx={{ pl: 4 }} onClick={handleFileDirectoryClick}>
                  <ListItemText primary="Other KYC File" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid container spacing={3}>
          <Grid item sx={{ maxWidth: "250px" }}>
            <Typography variant="h5" gutterBottom>
              Select Documents
            </Typography>
            <input type="file" multiple onChange={handleFileChange} />
            <Button
              variant="contained"
              color="primary"
              onClick={handleImport}
              disabled={!selectedFiles || selectedFiles.length === 0}
              sx={{ mt: 2 }}
            >
              Scan
            </Button>
          </Grid>
          <Grid>
            <Grid container spacing={3} sx={{ flexWrap: "nowrap", mt: "4px" }}>
              <Grid item xs={12} md={12}>
                <Typography variant="h5" gutterBottom>
                  Preview
                </Typography>
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    overflow: "auto",
                    height: "70vh",
                    width: "1000px",
                  }}
                >
                  {isViewerOpen && (
                    <img
                      ref={imageRef}
                      src={URL.createObjectURL(importedDocuments[currentImage])}
                      alt={importedDocuments[currentImage]?.name}
                      style={{
                        width: `${zoom * 100}%`,
                        height: "60vh",
                        transformOrigin: "top left",
                        maxHeight: "100%",
                        objectFit: 'contain'
                      }}
                    />
                  )}
                </Box>
                {isViewerOpen && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "1rem",
                    }}
                  >
                    <Button onClick={handlePrev}>
                      <NavigateBeforeIcon />
                    </Button>
                    <Typography variant="body2">
                      {currentImage + 1} of {importedDocuments.length}
                    </Typography>
                    <Button onClick={handleNext}>
                      <NavigateNextIcon />
                    </Button>
                    <Box>
                      <Button onClick={handleZoomOut}>
                        <ZoomOutIcon />
                      </Button>
                      <Button onClick={handleZoomIn}>
                        <ZoomInIcon />
                      </Button>
                    </Box>
                  </Box>
                )}
              </Grid>
              <Grid item xs={12} md={12} sx={{ marginLeft: "50px" }}>
                <Typography variant="h5" gutterBottom>
                  Scanned Images
                </Typography>
                <List>
                  {importedDocuments?.map((doc, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton onClick={() => openImageViewer(index)}>
                        <ListItemText primary={doc.name.slice(0, -4)} sx={{ textTransform: "capitalize" }} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MainContent>
    </ThemeProvider>
  );
}

export default App;