import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store/store'
import 'normalize.css';

const application: React.ReactElement = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(application,document.getElementById('application'))