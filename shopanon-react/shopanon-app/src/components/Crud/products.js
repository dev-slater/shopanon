import React from 'react';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';


const products = (props) => {
	const { products } = props;
	if (!products || products.length === 0) return <p>Can not find any products, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Paper >
					<TableContainer >
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									<TableCell>Id</TableCell>
									<TableCell align="left">Name</TableCell>
									<TableCell align="left">Price</TableCell>
									<TableCell align="left">Description</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{products.map((product) => {
									return (
										<TableRow>
											<TableCell component="th" scope="row">
												{product.id}
											</TableCell>
											<TableCell align="left">{product.name}</TableCell>

											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/product/' + product.slug}
												>
													${product.price}.00
												</Link>
											</TableCell>

											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/admin/edit/' + product.id}
												>
													<EditIcon></EditIcon>
												</Link>
												<Link
													color="textPrimary"
													href={'/admin/delete/' + product.id}
												>
													<DeleteForeverIcon></DeleteForeverIcon>
												</Link>
											</TableCell>
										</TableRow>
									);
								})}
								<TableRow>
									<TableCell colSpan={4} align="right">
										<Button
											href={'/admin/create'}
											variant="contained"
											color="primary"
										>
											New product
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Container>
		</React.Fragment>
	);
};
export default products;