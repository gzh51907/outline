import React,{Component} from 'react';

import Api from '@/Api';
import {Icon,Button} from 'antd';
import './Goods.scss';

let Style = {
    container:{padding:15}
}

class Goods extends Component{
    state = {
        data:{}
    }
    async componentDidMount() {
        let {match} = this.props;
        // 接收goods_id
        let goods_id = match.params.id;

        let {datas} = await Api.get({
            act:'goods',
            op:'goods_detail',
            goods_id,
            key:''
        });

        console.log(datas)
        let {goods_image,goods_info} = datas;
        this.setState({
            data:{
                ...goods_info,
                goods_image
            }
        })


    }
    render(){
        let {data} = this.state;
        return (
            <div style={Style.container}>
                <div className="img-container">
                    <img src={data.goods_image}/>
                    <Icon type="heart" style={{fontSize:30,color:'#f00'}} />
                </div>
                <h1>{data.goods_name}</h1>
                <p className="price">
                    <del>{data.goods_price}</del>
                    <span>{data.goods_promotion_price}</span>
                </p>
                <Button.Group>
                    <Button icon="shopping-cart" size="large">添加到购物车</Button>
                    <Button icon="shopping" type="danger" size="large">立即购买</Button>
                </Button.Group>
            </div>
        )
    }
}

export default Goods;