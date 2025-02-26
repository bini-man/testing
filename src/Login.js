import React, { useState, useRef, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  ThemeProvider,
  createTheme,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

// Import your image

const theme = createTheme({
  palette: {
    primary: {
      main: '#1c3371',
    },
    secondary: {
      main: '#FFB50C',
    },
  },
});

const FullScreenContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: `url(https://digital.almasraf.ae/AMRetailBanking/appzillon/styles/themes/ConsumerBankingNew/img/theme2-bg.jpg) center/cover no-repeat`,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
}));

const UniqueLoginBox = styled(Box)(({ theme }) => ({
  background: 'white',
  margin: '100px',
  backdropFilter: 'blur(30px)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  width: '450px',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const AnimatedCircle = styled(Box)(({ theme, size, top, left, right, bottom }) => ({
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 215, 0, 0.3)',
  pointerEvents: 'none',
  animation: 'floatCircle 5s linear infinite',
  width: size,
  height: size,
  top: top,
  left: left,
  right: right,
  bottom: bottom,
  zIndex: 1,
  '@keyframes floatCircle': {
    '0%': {
      transform: 'translateY(0)',
      opacity: 0.7,
    },
    '50%': {
      transform: 'translateY(-20px)',
      opacity: 0.3,
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 0.7,
    },
  },
}));

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const paperRef = useRef(null);
  const [userType, setUserType] = useState('retail'); // Add state for radio button
  const navigate = useNavigate(); // Create navigate function

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password.');
    } else {
        navigate('/extractor');
      // Perform login logic here
    }
  };

  const getRotation = () => {
    if (!paperRef.current) return 'rotate(0deg)';
    const rect = paperRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = cursorPos.x - centerX;
    const deltaY = cursorPos.y - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    return `rotate(${angle / 20}deg)`; // Adjust divisor for sensitivity
  };

  return (
    <ThemeProvider theme={theme}>
      <FullScreenContainer>
        <UniqueLoginBox ref={paperRef} >
          <Typography variant="h5" component="h2" color="primary" gutterBottom fontSize={32} fontWeight={600}>
            Login
          </Typography>
          <TextField
            label="Username"
            variant="standard"
            margin="normal"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="standard"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <RadioGroup
            row
            aria-label="user type"
            name="user-type-group"
            value={userType}
            onChange={handleUserTypeChange}
            sx={{ justifyContent: 'center', mb: 2 }} // Center the radio buttons
          >
            <FormControlLabel value="retail" control={<Radio />} label="Retail" />
            <FormControlLabel value="company" control={<Radio />} label="Corporate" />
          </RadioGroup>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleLogin}
            sx={{ mt: 2 }}
          >
            Login
          </Button>
          {/* <AnimatedCircle size="50px" top="20%" left="10%" />
          <AnimatedCircle size="80px" top="60%" right="5%" />
          <AnimatedCircle size="30px" bottom="10%" left="40%" /> */}
        </UniqueLoginBox>
      </FullScreenContainer>
    </ThemeProvider>
  );
}

export default Login;