import React from 'react';
import { render } from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import './index.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import Create from './components/Crud/create';
import Edit from './components/Crud/edit';
import Delete from './components/Crud/delete';
import Admin from './Admin';



const rootElement = document.getElementById("root");

render(
  <Router>
    <React.StrictMode>
    <Header />
    <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
        <Route exact path="/admin" element={<Admin/>}/>
        <Route exact path="/admin/create" element={<Create/>}/>
        <Route exact path="/admin/edit/:id" element={<Edit/>}/>
        <Route exact path="/admin/delete/:id" element={<Delete/>}/>
    </Routes>  
    </React.StrictMode>
  </Router>, rootElement
);


// ReactDOM.render(routing, document.getElementById('root'));

// serviceWorker.unregister();