import React,{Component} from 'react';
import {withTheme} from '../hoc';

class Login extends Component{
    render(){
        return (
            <div>
                Login
            </div>
        )
    }
}

Login = withTheme(Login)

export default Login;