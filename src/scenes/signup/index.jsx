import * as React from 'react';
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://nasosolutions.com/">
        NasoSolutions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

  // const baseURL = process.env.REACT_APP_BASE_URL;
  const baseURL = "https://server-u74y.vercel.app/createUser";
  // const baseURL = "http://localhost:3001/createUser";
  const headers = {
       
    'Access-Control-Allow-Origin': 'http://nktdc.vercel.app',
   'Content-Type': 'application/json',
      "Access-Control-Allow-Methods" : "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
     "Access-Control-Allow-Credentials" : true,
     "Access-Control-Max-Age": 1800
  
 };

  const [userDetails, setUserDetails] = React.useState({
    id: Math.floor(Math.random() * 1000),
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    userType: '',
    status: 'active',

  });

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phone: data.get('phone'),
      password: data.get('password'),
      userType: data.get('userType'),
      status: 'active',
      id: Math.floor(Math.random() * 1000),
    };
    setUserDetails(userData);
    createUser(userData) ;
  };

    const createUser = async (userData) => {
      try {
      const response = await axios.post(baseURL, userData,{headers});
      console.log('User created successfully:', response.data);
      } catch (error) {
      console.error('Error creating user:', error);
      }
    };
   
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="repassword"
                  label="Re-enter Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <TextField
                    id="userType"
                    select
                    label="User Type"
                    defaultValue="Doctor"
                  >
                    <MenuItem value="Doctor">Doctor</MenuItem>
                    <MenuItem value="employee">Employee</MenuItem>
                  </TextField>
                </FormControl>
                
                </Grid>

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
