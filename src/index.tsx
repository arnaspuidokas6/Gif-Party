import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { GifsList } from './pages/GifsList';

render(
    <React.StrictMode>
        <GifsList />
    </React.StrictMode>,
    document.getElementById('root'),
);
