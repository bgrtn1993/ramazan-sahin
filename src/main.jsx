import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // HashRouter kullanıldı
import App from './App.jsx'; // Ana App bileşenini import et

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router basename="/ramazan-sahin/">
            <App />
        </Router>
    </React.StrictMode>,
);
