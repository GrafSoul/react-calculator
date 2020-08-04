import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

import App from './App';

import calculatorReducer from './store/reducers/calculator';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ calculator: calculatorReducer });

const logger = (store) => {
    return (next) => {
        return (action) => {
            // console.log('[Middleware] Dispatching', action);
            const result = next(action);
            // console.log('[Middleware] next state', store.getState());
            return result;
        };
    };
};

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger, thunk)),
);

const AppProvider = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    <React.StrictMode>
        <AppProvider />
    </React.StrictMode>,
    document.getElementById('root'),
);

serviceWorker.unregister();
