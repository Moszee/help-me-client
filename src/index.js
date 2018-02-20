import React from 'react';
import ReactDOM from 'react-dom';
import 'resources/styles/index.css';
import App from 'components/App';
import 'normalize.css';
import registerServiceWorker from 'components/util/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
