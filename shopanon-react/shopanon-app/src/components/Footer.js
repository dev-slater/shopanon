import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function Footer() {
    return (
<React.Fragment>
    <Container>
        <Grid>
        <Typography>
        <h1></h1>
        <br></br>
        </Typography>
        </Grid>
        <Box>
            <Button href="/admin" 
						fullWidthmaxWidth="md"
						variant="contained"
						style={{ background: '#b0bec5' }}>
                List View
            </Button>
        </Box>
    </Container>
</React.Fragment>
    )
};



export default Footer;
