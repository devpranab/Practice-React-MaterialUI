# Practice-React-MaterialUI
https://v4.mui.com/getting-started/installation/
<h4>React UI framework is Material UI, component based like Bootstrap</h4>
<h5>Use of ThemeProvider :</h5>

index.js
<code>
import { ThemeProvider } from '@mui/material';
import {Theme} from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
</code>

Test.js
<code>
import React from 'react';
import Box from '@material-ui/core';
import Typography from '@material-ui/core';
import { useTheme }from '@material-ui/styles';

const Test = () => {
    const theme = useTheme();
    console.log(theme);
    return (
        <Box>
            <Typography variant="h1" color="primary">Hello World!</Typography>
        </Box>
    );
};

export default Test;
</code>

Theme.js
<code>
/*
ThemeProvider
Used to modify current theme
Child components needs to be wrapped inside it
You can access current theme by useThemes
*/

import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette:{
        primary: {
            main: "#F4005E"
        },
        },
    typography: {
        h1:{
            fontSize: "35px"
        },
        },
    breakpoints: {
        values:{
            xs: 200,
        }
    }      
});
</code>
