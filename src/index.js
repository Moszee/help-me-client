import React from 'react';
import ReactDOM from 'react-dom';
import 'resources/styles/index.css';
import App from 'components/App';
import 'normalize.css';
import registerServiceWorker from 'components/util/registerServiceWorker';
import {
    BrowserRouter
} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
