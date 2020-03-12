import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Header from './components/Header';
import Routes from './routes';

import {Provider} from 'react-redux';
import store from './store/index';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <StatusBar barStyle="light-content" backgroundColor="orange" />
                <Header />
                <Routes />
            </Provider>
        );
    }
}

export default App;
