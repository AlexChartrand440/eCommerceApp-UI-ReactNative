/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// import React from 'react';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './src/reducers';
// import ReduxThunk from 'redux-thunk';

// const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


// const AppContainer = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// );

AppRegistry.registerComponent(appName, () => App);
