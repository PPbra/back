import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';
import BrowserRouter from   'react-router-dom/BrowserRouter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(<BrowserRouter>
    <App/>
</BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
