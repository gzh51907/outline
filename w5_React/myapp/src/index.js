import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// let username = 'laoxie';
// let myBtn = <button>点我</button>
// let mystyle = {
//     color:'#f00'
// }

// ReactDOM.render(
//     // 渲染内容：虚拟节点
//     // React.createElement(type,[props],[...children])
//     // React.createElement('h1',null,'H5-1907'), //<h1>H5-1907</h1>
//     // React.createElement(
//     //     'div',
//     //     null,
//     //     [
//     //         React.createElement('h1',null,'H5-1907'),
//     //         React.createElement(
//     //             'ul',
//     //             null,
//     //             [
//     //                 React.createElement('li',null,'data1'),
//     //                 React.createElement('li',null,'data2'),
//     //             ]
//     //         ),
//     //     ]
//     // ), 
//     <div>
//         <h1 className="title" data-username={username}>H5-1907 {username}</h1>
//         <ul className="datalist" style={{color:'#58bc58',fontSize:20}}>
//             <li>data1</li>
//             <li>data2</li>
//         </ul>
//         {
//             //<label htmlFor="username">用户名：</label>
//             //<input type="text" id="username"/>
//         }
//         {myBtn}
//     </div>,
//     // 挂载点
//     document.querySelector('#root')
// )
