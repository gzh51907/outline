import React,{Component} from 'react';

import {withUser} from '../hoc'

class Discover extends Component{
    render(){
        return (
            <div>
                Discover
            </div>
        )
    }
}

Discover = withUser(Discover)

export default Discover;