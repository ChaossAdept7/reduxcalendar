/**
 * Created by serj on 5/23/17.
 */
import React from 'react';
import {render} from 'react-dom';
import App from './components/Home/Home'
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import Root from './components/Root'
//configure and create store
import { BrowserRouter, Route , withRouter} from 'react-router-dom';

let initialState = {
    users:{
        current_user:false,
        new_user:false
    }
};

let store = configureStore(initialState);

render(<BrowserRouter>
        <Provider store={store}>
            <Root />
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);