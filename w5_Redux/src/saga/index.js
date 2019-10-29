/**
 * Redux-Saga
    * Generator生成器函数
    * Iterator迭代器
        * next()        在yield返回结果后，saga在内部自定调用next() 
 */
 import {CHANGE_QTY} from '../store/action/cart'
 import {takeEvery,takeLatest,put,call,apply} from 'redux-saga/effects';

 import Api from '@/Api'

 function* HelloSaga(){console.log(666)
    let res = yield 100;
    console.log(777,res);
    yield 200;
    console.log(888);
    return 300
 }

 function* getData(){
    //  测试（单元测试、点对点测试）
    // let res = yield Api.get({
    //     act:'index'
    // });
    let res = yield call(Api.get,{act:'index'});

    console.log('getData:',res);

    // 等待异步结果回来后，触发reduxAction
    // yield put({type:'ADD_TO_CART',payload:res})
 }



 function * rootSaga(){
    //  监听sagaAction，当dispatch({type:'CHANGE_QTY_ASYNC'})时，自动执行HelloSaga
    yield takeEvery(CHANGE_QTY+'_ASYNC',HelloSaga);
    yield takeLatest('GET_DATA_ASYNC',getData);//takeLatest做了防抖

 }

 

 export default rootSaga;