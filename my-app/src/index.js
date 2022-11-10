import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";



import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './index.css';
import App from './App';
import store from "./store/store";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Router>
         <Provider store={store}>
        <App />
      </Provider>
    </Router>
 
);


