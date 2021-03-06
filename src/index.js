import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducers from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

export const API_URL = 'https://api.hh.ru/vacancies?per_page=50&only_with_salary=true&area=113'

const store = createStore(
    reducers,
    applyMiddleware(logger, thunk)
)

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <MuiThemeProvider>
                <App />
            </MuiThemeProvider>
        </Provider>
    </Router>, document.getElementById('root'));

registerServiceWorker();