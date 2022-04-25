import React from 'react';
import {} from 'react-native';
import {} from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider } from 'styled-components/native';
import Routes from './src/routes/index'
import global from './src/themes/global';

const App = () => {
  return (
    <>
    <ThemeProvider theme={global}>
    <Routes/>
    </ThemeProvider>
    </>
  );
};


export default App;
