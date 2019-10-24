import React, { Component } from 'react';

import { Carousel } from 'antd';

import Api from '@/Api';

class Home extends Component {
    state = {
        recommend:[]
    }
    async componentDidMount() {
        let {datas} = await Api.get({
            act: 'index'
        });

        let recommend = datas[0].adv_list.item;

        this.setState({
            recommend
        })


    }
    render() {
        let {recommend} = this.state;
        return (
            <div>
                <Carousel>
                    {
                        recommend.map(item=>{
                            return <div>
                                <img src={item.image}  style={{width:'100%',maxHeight:160}}/>
                            </div>
                        })
                    }
                </Carousel>
            </div>
        )
    }
}

export default Home;