import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root';
import configureStore from './modules/configureStore';

const store = configureStore(window.PRELOADED_STATE)

const root = (
    <Root 
        store={store}
        Router={BrowserRouter}/>
    );

hydrate(root, document.getElementById('root'));
