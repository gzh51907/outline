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
import { Menu, Icon } from 'antd';
// import 'antd/dist/antd.css';


import Home from '~/Home';
import Discover from '~/Discover';
import Reg from '~/Reg';
import Login from '~/Login';

const NotFound = function () {
    return (
        <div>
            404
        </div>
    )
}

@withRouter
class App extends Component{
    // this.props
    // this.context
    // constructor(props,context){console.log('constructor:',props)
    //     super();
    //     this.state = {
    //         selected:['/home'],
    //         menu : [{
    //             name: 'home',
    //             path: '/home',
    //             text: '首页',
    //             icon: 'home'
    //         }, {
    //             name: 'discover',
    //             path: '/discover',
    //             text: '发现',
    //             icon: 'eye'
    //         }, {
    //             name: 'reg',
    //             path: '/reg',
    //             text: '注册',
    //             icon: 'user-add'
    //         }, {
    //             name: 'login',
    //             path: '/login',
    //             text: '登录',
    //             icon: 'login'
    //         }]
    //     }
    // }
    state = {
        selected:['/home'],
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

    // // 原型方法
    // getMenu(){

    // }

    // // 实例方法
    // handleClick = ()=>{
    //     console.log(this)
    //     console.dir(App)
    // }

    // // 静态方法（ES6支持）
    // static show(){

    // }
    // // 静态属性（ES6默认不支持）
    // static username = 'App';
    // // static contextType = MyContext

    componentDidMount(){
        let {location:{pathname}} = this.props;console.log(pathname)
        this.setState({
            selected:[pathname]
        })
    }
   
    render() {
        let {history} = this.props
        let {selected,menu} = this.state;
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
                >
                    {
                        menu.map(item=><Menu.Item key={item.path}>
                            <Icon type={item.icon} />
                            {item.text}
                        </Menu.Item>)
                    }
                    
                </Menu>
               
    
    
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/discover" component={Discover} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />
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