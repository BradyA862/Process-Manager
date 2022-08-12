import React from 'react';
import ReactDOM from "react-dom/client";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import App from './App';
import {Provider} from "react-redux";
import {Container} from "react-bootstrap";
import userReducer from "./reducers/userReducer";
import processReducer from "./reducers/processReducer";
import 'bootstrap/dist/css/bootstrap.min.css'


const handleAsync = storeAPI => next => action => {
    if (typeof action === 'function')
        return action(storeAPI.dispatch, storeAPI.getState)

    next(action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const store = createStore(
    combineReducers({userReducer, processReducer}),
    composeEnhancers(applyMiddleware(handleAsync))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Container>
                <App/>
            </Container>
        </Provider>
    </React.StrictMode>
);