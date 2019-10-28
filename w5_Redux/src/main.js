import React from 'react';
import {render} from 'react-dom';
import {HashRouter,Route} from 'react-router-dom';
import App from './App.jsx';
import {Provider} from 'react-redux';
import store from './store'

let MyContext = React.createContext()

render(
    <Provider store={store}>
        {/* <MyContext.Provider value={store}> */}
        <HashRouter>
            <App/>
            {/* <Route component={App}/> */}
        </HashRouter>
        {/* </MyContext.Provider> */}
    </Provider>
    ,
    document.getElementById('app')
)