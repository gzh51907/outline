import React,{Component} from 'react';

import Api from '@/Api';
import {Icon,Button} from 'antd';
import './Goods.scss';
import {connect} from 'react-redux';

let Style = {
    container:{padding:15}
}
const mapStateToProps = state=>{
    return {
        goodslist:state.goodslist
    }
}
const mapDispathToProps = dispatch=>{
    return {
        add2cart(payload){
            dispatch({type:'ADD_TO_CART',payload})
        },
        changeQty(goods_id,goods_qty){
            dispatch({type:'CHANGE_QTY',payload:{goods_id,goods_qty}})
        },
        dispatch
    }
}

@connect(mapStateToProps,mapDispathToProps)
class Goods extends Component{
    state = {
        data:{}
    }
    addToCart = ()=>{
        let {goodslist,add2cart,changeQty} = this.props
        let {goods_name,goods_id,goods_image,goods_price} = this.state.data;

        // 判断商品是否存在购物车
        // 存在：数量+1
        // 不存在：添加到购物车
        let currentGoods = goodslist.filter(item=>item.goods_id===goods_id)[0];

        if(currentGoods){
            changeQty(goods_id,currentGoods.goods_qty+1)
        }else{
            add2cart({goods_name,goods_id,goods_image,goods_price,goods_qty:1})

        }


    }
    async componentDidMount() {console.log('Goods.props:',this.props)
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
                    <Button icon="shopping-cart" size="large" onClick={this.addToCart}>添加到购物车</Button>
                    <Button icon="shopping" type="danger" size="large">立即购买</Button>
                </Button.Group>
            </div>
        )
    }
}

export default Goods;