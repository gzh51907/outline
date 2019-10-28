/**
 * redux模块化
 * 合并多个reducer：影响到State的获取
 */

 import {combineReducers} from 'redux';

 import cartReducer from './cart';
 import userReducer from './user';

 let rootReducer = combineReducers({
    cart:cartReducer,
    user:userReducer
 });

 export default rootReducer;