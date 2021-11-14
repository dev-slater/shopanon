import React from "react";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

function Header() {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="static"
                color="blue"
                elevation={0}
                >
                <ToolBar>
                    <Typography variant="h6" color="inherit" noWrap>
                    ShopAnon!
                    </Typography>
                </ToolBar>
            </AppBar>
        </React.Fragment> 
    
    )
};



export default Header; 