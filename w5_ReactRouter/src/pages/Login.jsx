import React,{Component} from 'react';
import {withTheme} from '../hoc';

// @演示生命周期函数的执行过程
class Login extends Component{
    constructor(){
        super();
        console.log('constructor')
        this.state = {
            qty:1,
            content:'<strong>laoxie</strong>'
        }
    }
    changeQty = ()=>{
        this.setState({
            qty:this.state.qty+1
        })
    }
    // 
    // UNSAFE_componentWillMount(){
    //     console.log('UNSAFE_WillMount')
    // }
    componentDidMount(){
        console.log('DidMount')
    }

    // UNSAFE_componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps')
    // }

    // 是否重渲染组件
    // 一般会利用shouldComponentUpdate进行性能优化
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate:',nextState.qty,this.state.qty)
        if(nextState.qty>=5){
            return true;
        }else{
            return false
        }
    }

    // 更新阶段
    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate',nextState.qty,this.state.qty)
    }
    componentDidUpdate(nextProps, nextState){
        console.log('DidUpdate',nextState.qty,this.state.qty)
    }

    // 卸载阶段
    componentWillUnmount(){
        
    }
    render(){
        console.log('render')
        return (
            <div>
                
                <button onClick={this.changeQty}>{this.state.qty}</button>
                <div>{this.state.content}</div>
                <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            </div>
        )
    }
}

// Login = withTheme(Login)

export default Login;