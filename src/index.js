import React from 'react';
import ReactDOM from 'react-dom/client';
import  { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import gameReducer from './Slices/gameSlice';
import App from './components/App';
import './index.css';


const store = configureStore({
    reducer: {
        game: gameReducer
    }
});

store.subscribe(() => {
    console.log('store.getState', store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
