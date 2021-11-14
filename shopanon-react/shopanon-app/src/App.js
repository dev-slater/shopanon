import React, {useEffect, useState} from 'react';
import './App.css';
import Products from './components/Products';
import ProductLoadingComponent from './components/ProductLoader';

function App() {
  const ProductLoading = ProductLoadingComponent(Products);
  const [appState, setAppState] = useState({
    loading:false,
    products: null,
  }); 
  useEffect(() => {
    setAppState({ loading: true});
    const apiUrl = "http://127.0.0.1:8000/api/!!";
    fetch(apiUrl)
    .then((data) => data.json())
    .then((products) => {
      setAppState({ loading: false, product: products});
    });
  }, [setAppState]);
  return(
    <div className="App">
      <h1>Products</h1>
      <ProductLoading isLoading={appState.loading} products={appState.products} />
    </div>
    );
  }

  export default App;











// import React from 'react';

// class Api extends React.Component{
//   componentDidMount() {
//     const apiUrl = "http://127.0.0.1:8000/api";
//       fetch(apiUrl)
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//   }
//   render() {
//     return <div>Example Connection</div>;
//   }
// }

// export default Api;
 