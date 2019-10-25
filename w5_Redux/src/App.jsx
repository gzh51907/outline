import React,{Component} from 'react';

import { HashRouter, 
    BrowserRouter, 
    Route, 
    Redirect, 
    Switch,
    Link,
    NavLink,
    withRouter
 } from 'react-router-dom';
import { Menu, Icon,Badge } from 'antd';
// import 'antd/dist/antd.css';


import Home from '~/Home';
import Discover from '~/Discover';
import Reg from '~/Reg';
import Login from '~/Login';
import Goods from '~/Goods/index';
import Cart from '~/Cart';

import './App.scss';

const NotFound = function () {
    return (
        <div>
            404
        </div>
    )
}

import store from '@/store';

@withRouter
class App extends Component{
    
    state = {
        selected:['/home'],
        cartlength:0,
            menu : [{
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
                name: 'cart',
                path: '/cart',
                text: '购物车',
                icon: 'shopping-cart'
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
    }



    componentDidMount(){
        let {location:{pathname}} = this.props;
        let state = store.getState();
        this.setState({
            selected:[pathname],
            cartlength:state.goodslist.length
        })

        // 监听store修改，更新购物车数量
        store.subscribe(()=>{
            let state = store.getState();
            this.setState({
                cartlength:state.goodslist.length
            })
        })

    }
   
    render() {
        let {history} = this.props
        let {selected,menu,cartlength} = this.state;
        return (
            <div>
                <Menu 
                mode="horizontal"
                selectedKeys={selected}
                onSelect={({key})=>{
                    // console.log(key)
                    history.push(key)
                    this.setState({
                        selected:[key]
                    })
                }}
                theme="dark"
                >
                    {
                        menu.map(item=><Menu.Item key={item.path}>
                            {
                                item.name === 'cart' ? 
                                <Badge count={cartlength}>
                                    <Icon type={item.icon} />
                                    {item.text}
                                </Badge>
                                :
                                <React.Fragment>
                                    <Icon type={item.icon} />
                                    {item.text}
                                </React.Fragment>
                            }
                            
                        </Menu.Item>)
                    }
                    
                </Menu>
               
    
    
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/discover" component={Discover} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/goods/:id" component={Goods} />
                    {/* <Route path="/" component={Home} exact /> */}
                    <Redirect from="/" to="/home" exact/>
                    <Route render={() => <div><h1>404</h1>页面不存在</div>} />
                </Switch>
            </div>
        )
    }
}

// App = withRouter(App)

export default App;