import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBSMNUpp7UfYP3JmV9CpikpIXCbRuhF1Zc',
            authDomain: 'manager-19e21.firebaseapp.com',
            databaseURL: 'https://manager-19e21.firebaseio.com',
            storageBucket: 'manager-19e21.appspot.com',
            messagingSenderId: '630286904935'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
