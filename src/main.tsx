import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { createPresence } from '@yomo/presence';

const id = new Date().valueOf().toString(36);
const pp = createPresence('https://lo.yomo.dev:8443/v1', {
    publicKey: 'PiHYRKapgfmHxthWmWlqpAcdYdxCtPtl2jmwrzig',
    id: id,
    debug: true,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App presence={pp} channel='css' name={id} id={id} />
    </React.StrictMode>
);
