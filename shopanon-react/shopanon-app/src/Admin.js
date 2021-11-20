import React, { useEffect, useState } from 'react';
import './App.css';
import products from './components/Crud/products';
import ProductLoadingComponent from './components/ProductLoader';
import axiosInstance from './api';

function Admin() {
	const ProductLoading = ProductLoadingComponent(products);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		axiosInstance.get().then((res) => {
			const allProducts = res.data;
			setAppState({ loading: false, products: allProducts });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
		<div className="App">
			<h1>Product Admin View</h1>
			<ProductLoading isLoading={appState.loading} products={appState.products} />
		</div>
	);
}
export default Admin;