import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import * as Colors from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core';

// const styles = getMuiTheme({

// });

export default createMuiTheme({
    palette: {
        primary: teal ,
        secondary: black
    }

});

export default class Login extends React {
    render() {
        return (
            <div>
               <MuiThemeProvider >
                   <div>
                       <AppBar color="primary">
                            <Toolbar>
                                <Typography color="inherit">
                                    <h3>Artemus-Distill</h3>
                                </Typography>
                            </Toolbar>
                       </AppBar>
                   </div>
               </MuiThemeProvider>
            </div>
        );
    }
    //const classes = styles();
}
