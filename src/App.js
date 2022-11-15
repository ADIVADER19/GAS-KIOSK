import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect,useState}  from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import axios from 'axios';
function App() {
  const [dat,setDat]=useState(0);
  const theme = createTheme();

  theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };


  return (

    <div className="App">
      <div className="container">
        <ThemeProvider theme={theme}><Typography className="title" variant="h3" align="center">GAS KIOSK </Typography></ThemeProvider>
        <br/>
        <iframe width="450" height="260" style={{backgroundColor:'#000000',border: "1px solid #cccccc"}} src="https://thingspeak.com/channels/1884399/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
      </div>
    </div>
  );
}


export default App;

