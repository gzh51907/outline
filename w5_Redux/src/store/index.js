import {createStore,applyMiddleware,compose} from 'redux';

// 引入调试工具中间件
import {composeWithDevTools } from 'redux-devtools-extension';

// 1.引入redux-saga
import createSagaMiddleware from 'redux-saga';

// 2.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

import rootReducer from './reducer';

// 3.将 sagaMiddleware 连接至 Store
let enhancer = applyMiddleware(sagaMiddleware);
// const store = createStore(rootReducer,composeWithDevTools(enhancer));

// 利用compose处理多个中间件
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        composeWithDevTools()
    )
);

// 4.运行 Saga配置
import rootSaga from '../saga'
sagaMiddleware.run(rootSaga);


export default store;