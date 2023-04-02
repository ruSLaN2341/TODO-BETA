import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store, {persistor} from "./redux/index"
import {Provider} from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {initializeApp} from "firebase/app";
import { StyledEngineProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
    apiKey: "AIzaSyAGtRrojaNe_Vi5ni8eVngOQVXFb-9xlxE",
    authDomain: "todolist-e4f29.firebaseapp.com",
    projectId: "todolist-e4f29",
    storageBucket: "todolist-e4f29.appspot.com",
    messagingSenderId: "646630002473",
    appId: "1:646630002473:web:d31a1d2d8009bdf79af138",
    measurementId: "G-S693KGP0L1"
};
initializeApp(firebaseConfig);
root.render(
    <Provider store={store}>
        <PersistGate loading={"...Loading"} persistor={persistor}>
            <StyledEngineProvider injectFirst>
                <App />
            </StyledEngineProvider>
        </PersistGate>
    </Provider>
);

