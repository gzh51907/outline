import React,{Component} from 'react';

import {withUser} from '../hoc'

@withUser
class Reg extends Component{
    // componentDidMount(){
    //     let user = localStorage.getItem('user');
    //     try{
    //         user = JSON.parse(user);
    //         this.setState({user})
    //     }catch(err){

    //     }
        

    // }
    render(){
        console.log('Reg.props',this.props)
        return (
            <div>
                Reg
            </div>
        )
    }
}

// Reg = withUser(Reg)
export default Reg;