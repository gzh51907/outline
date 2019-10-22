import React from 'react';

import { HashRouter, BrowserRouter, Route, Redirect, Switch,Link,NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';


import Home from './pages/Home.jsx';
import Discover from './pages/Discover.jsx';
import Reg from './pages/Reg.jsx';
import Login from './pages/Login.jsx';

const NotFound = function () {
    return (
        <div>
            404
        </div>
    )
}

function App() {
    let menu = [{
        name: 'home',
        path: '/home',
        text: '首页',
        icon: 'home'
    }, {
        name: 'discover',
        path: '/discover',
        text: '发现',
        icon: 'eye'
    }, {
        name: 'reg',
        path: '/reg',
        text: '注册',
        icon: 'user-add'
    }, {
        name: 'login',
        path: '/login',
        text: '登录',
        icon: 'login'
    }]
    return (
        <div>
            <Menu mode="horizontal">
                {
                    menu.map(item=><Menu.Item key={item.name}>
                        <Icon type={item.icon} />
                        {item.text}
                    </Menu.Item>)
                }
                
            </Menu>
            <ul>
                {
                    menu.map(item => <li>
                        <NavLink to={item.path} activeStyle={{color:'#58bc58',fontWeight:800}}>{item.text}</NavLink>
                    </li>)
                }
            </ul>


            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/discover" component={Discover} />
                <Route path="/reg" component={Reg} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Home} exact />
                <Route render={() => <div><h1>404</h1>页面不存在</div>} />
                {/* <Redirect from="/" to="/home"/> */}

            </Switch>
        </div>
    )
}

export default App;