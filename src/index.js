import React from 'react';
import ReactDOM from 'react-dom/client';
import  { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import deckReducer from './Slices/deckSlice';
import settingsReducer from './Slices/settingsSlice';
import App from './components/App';
import './index.css';


const store = configureStore({
    reducer: {
        deck: deckReducer,
        settings: settingsReducer
    }
});

store.subscribe(() => {
    console.clear();
    console.log('store.getState', store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
