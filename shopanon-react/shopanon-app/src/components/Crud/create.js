import React, { useState } from 'react';
import axiosInstance from '../../api';
import { useNavigate } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



export default function Create() {
	function slugify(string) {
		const a =
			'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
		const b =
			'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
		const p = new RegExp(a.split('').join('|'), 'g');

		return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
			.replace(/&/g, '-and-') // Replace & with 'and'
			.replace(/[^\w\-]+/g, '') // Remove all non-word characters
			.replace(/\-\-+/g, '-') // Replace multiple - with single -
			.replace(/^-+/, '') // Trim - from start of text
			.replace(/-+$/, ''); // Trim - from end of text
	}

	const history = useNavigate();
	const initialFormData = Object.freeze({
		name: '',
		slug: '',
		price: '',
		description: '',
        image:'',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		if ([e.target.name] == 'name') {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
				['slug']: slugify(e.target.value.trim()),
			});
		} else {
			updateFormData({
				...formData,
				// Trimming any whitespace
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.post(`admin/create/`, {
				name: formData.name,
				slug: formData.slug,
				price: formData.price,
				description: formData.description,
				image: formData.image,
                favorite: formData.favorite
			})
			.then((res) => {
				history('/admin/');
			});
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div >
				<Avatar ></Avatar>
				<Typography component="h1" variant="h5">
					Create New Product
				</Typography>
				<form  noValidate>
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
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="price"
								label="Product price"
								name="price"
								autoComplete="price"
								onChange={handleChange}
								multiline
								rows={1}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="slug"
								label="slug"
								name="slug"
								autoComplete="slug"
								value={formData.slug}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="description"
								label="description"
								name="description"
								autoComplete="description"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="image"
								label="image"
								name="image"
								autoComplete="image"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
                        <Grid item xs={12}>
							{/* <TextField
								variant="outlined"
								required
								fullWidth
								id="favorite"
								label="favorite"
								name="favorite"
								autoComplete="favorite"
								onChange={handleChange}
								multiline
								rows={4}
							/> */}
                            <FormControlLabel
						control={<Checkbox value="favorite" color="primary" />}
						label="Favorite" onChange={handleChange} id="favorite"
					/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
					>
						Add Product
					</Button>
				</form>
			</div>
		</Container>
	);
}