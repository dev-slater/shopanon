import React, { useState, useEffect } from 'react';
import axiosInstance from '../../api';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default function Create() {
	const history = useNavigate();
	const { id } = useParams();
	const initialFormData = Object.freeze({
		id: '',
		name: '',
		description: '',
		price: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	useEffect(() => {
		axiosInstance.get('admin/edit/productdetail/' + id + '/').then((res) => {
			updateFormData({
				...formData,
				'name': res.data.name,
				'description': res.data.description,
				'price': res.data.price,
			});
			console.log(res.data);
		});
	}, [updateFormData]);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
        
		axiosInstance.put(`admin/edit/` + id + '/', {
            name: formData.name,
			description: formData.description,
			price: formData.price,
		});
        console.log(formData);
		history({
			pathname: '/admin/',
		});
		window.location.reload();
	};

	return (
		<Container component="main" maxWidth="sm">
			<CssBaseline />
			<div >
				<Typography component="h1" variant="h5">
					Edit Product
				</Typography>
				<form noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Product name"
								name="name"
								autoComplete="name"
								value={formData.name}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="description"
								label="Product description"
								name="description"
								autoComplete="description"
								value={formData.description}
								onChange={handleChange}
								multiline
								rows={8}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="price"
								label="price"
								name="price"
								autoComplete="price"
								value={formData.price}
								onChange={handleChange}
								multiline
								rows={1}
							/>
						</Grid>
					</Grid>
                    <br></br>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
					>
						Update Product
					</Button>
				</form>
			</div>
		</Container>
	);
}