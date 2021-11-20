import React from "react";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                >
                <ToolBar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Button component={NavLink}
                        to="/">
                        ShopAnon
                        </Button>
                        </Typography>
                        <Typography variant="h6" color="inherit" noWrap> 
                        <Button component={NavLink}
                        to="/register">
                        Sign-Up!
                        </Button> 
                        <Button component={NavLink}
                        to="/login">
                        Login
                        </Button>
                        <Button component={NavLink}
                        to="/logout">
                        Logout
                        </Button>
                    </Typography>
                </ToolBar>
            </AppBar>
        </React.Fragment> 
    
    )
};



export default Header; 