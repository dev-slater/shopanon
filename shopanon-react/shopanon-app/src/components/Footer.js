import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/link';

function Footer() {
    return (
<React.Fragment>
    <Container>
        <Grid>
        <Typography>
        </Typography>
        </Grid>
        <Box>
            <Link href="/admin">
                List View
            </Link>
        </Box>
    </Container>
</React.Fragment>
    )
};



export default Footer;
