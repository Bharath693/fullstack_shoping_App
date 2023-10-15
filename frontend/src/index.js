import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

