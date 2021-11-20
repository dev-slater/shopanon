import React from 'react';
import { render } from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import './index.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/register';
import Login from './components/login';

const rootElement = document.getElementById("root");

render(
  <Router>
    <React.StrictMode>
    <Header />
    <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/logout" />
    </Routes>  
      <Footer />
    </React.StrictMode>
  </Router>, rootElement
);


// ReactDOM.render(routing, document.getElementById('root'));

// serviceWorker.unregister();