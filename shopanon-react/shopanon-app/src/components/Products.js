import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Products = (props) => {
    const { products } = props;
    if (!products || products.length === 0) return <p>No Products Available</p>
    return(
        <React.Fragment>
             <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {products.map((product) => {
                        return(
                            <Grid item key={product.id} xs={12} md={4}>
                                <Card>
                                    <CardMedia
                                    square
                                    title="Media"/>
                                    <img src={product.image} alt="media"
                                        width={300} height={300} mode='limit'
                                    />
                                    <CardMedia/>
                                    <CardContent style={{ background: '#b0bec5' }}>
                                        <Typography
                                        gutterbottom
                                        variant="h6"
                                        component="h2">
                                        {product.name}
                                        </Typography>
                                        <div>
                                        <Typography component="p">
                                        {product.description}
                                        </Typography>
                                        <Typography>
                                        <p>${product.price}</p>
                                        </Typography>
                                        </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                            );
                        })}

                        </Grid>
                    </Container>
                </React.Fragment> 
    
    )
}

export default Products; 
