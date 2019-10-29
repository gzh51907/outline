import React, { Component } from 'react';

import { Carousel,Row,Col } from 'antd';

import {connect} from 'react-redux';

import Api from '@/Api';

@connect()
class Home extends Component {
    state = {
        recommend:[],
        datalist:[]
    }
    goto = (id)=>{
        let {history} = this.props
        history.push(`/goods/${id}`);
    }

    async componentDidMount() {
        let {datas} = await Api.get({
            act: 'index'
        });

        let recommend = datas[0].adv_list.item;

        // 格式化数据
        let datalist = datas.slice(1).map(item=>item.goods);

        this.setState({
            recommend,
            datalist
        })

        // 触发sagaAction
        // this.props.dispatch({type:'CHANGE_QTY',payload:{goods_id,goods_qty}});//字节进入reducer
        this.props.dispatch({type:'GET_DATA_ASYNC'});//字节进入saga中间件
    }
    render() {
        let {recommend,datalist} = this.state;
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
                <div style={{padding:10}}>
                {
                    datalist.map(item=>{
                        return <div>
                            <h4>{item.title}</h4>
                            <Row gutter={30}>
                                {
                                    item.item.map(goods=>{
                                        return <Col 
                                        style={{minHeight:280}}
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        onClick={this.goto.bind(this,goods.goods_id)}
                                        >
                                            <img src={goods.goods_image} style={{width:'100%'}}/>
                                            <h5>{goods.goods_name}</h5>
                                            <p className="price">
                                                <del>{goods.goods_price}</del>
                                                <span>{goods.goods_promotion_price}</span>
                                            </p>
                                        </Col>
                                    })
                                }
                            </Row>
                        </div>
                    })
                }
                </div>
            </div>
        )
    }
}

export default Home;