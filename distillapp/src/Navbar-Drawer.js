import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
//import { MuiThemeProvider } from '@material-ui/styles';
//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { useTheme, makeStyles } from '@material-ui/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Home from '@material-ui/icons/Home';
//import { createMuiTheme } from '@material-ui/core';


const drawerWidth = '250';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

export default function AppNav() {
    const classes = useStyles();
    const theme = createMuiTheme();
    const [open, setOpen] = React.useState(false);
    //const theme = useTheme();

    function handleDrawerClose() {
        setOpen(false);
    }
        return(
            <MuiThemeProvider theme={theme}>
                <div>
                    <AppBar position='static'>
                        <Toolbar>
                            <IconButton 
                                // color=''
                                aria-label='open drawer'
                                // //onClick={}
                                // edge='start'
                                // className={}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant='h5' noWrap>
                                Artemus-Distill
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer>
                        <div>
                            <IconButton onClick={handleDrawerClose}>
                                {
                                    theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />
                                }
                            </IconButton>
                            <Divider />
                             <List>
                                    <ListItem button>
                                         <ListItemIcon>
                                           <Home />
                                         </ListItemIcon>
                                         <ListItemText>
                                             Home
                                         </ListItemText>
                                    </ListItem>  
                                ))                           
                            </List>
                        </div>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
}
