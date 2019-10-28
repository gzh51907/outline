import React, { Component } from 'react';
import { List, InputNumber, Avatar, Icon, Button, Tooltip, Row, Col, Divider } from 'antd'

import { connect } from 'react-redux';
const mapStateToProps = state => ({
    goodslist: state.goodslist,
    totalPrice:state.goodslist.reduce((prev,item)=>prev+item.goods_price*item.goods_qty,0)
});
const mapDispatchToProps = dispatch => {
    return {
        changeQty(goods_id, goods_qty) {
            console.log(goods_id, goods_qty);
            dispatch({
                type: 'CHANGE_QTY',
                payload: {
                    goods_id, goods_qty
                }
            })
        },
        removeItem(goods_id) {
            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: goods_id
            })
        },
        clearCart() {

        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
class Cart extends Component {


    componentDidMount() {



    }
    render() {
        let { goodslist, changeQty, removeItem,totalPrice } = this.props;
        return (
            <div style={{ padding: 15 }}>
                <List
                    itemLayout="horizontal"
                    dataSource={goodslist}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <Tooltip title="删除商品">
                                    {/* <Button 
                                    icon="delete" 
                                    type="link" 
                                    shape="circle"
                                    size="small"
                                    ></Button> */}
                                    <Icon type="delete" 
                                    style={{ color: '#f00' }}
                                    onClick={removeItem.bind(this,item.goods_id)}
                                    />
                                </Tooltip>]}
                        >
                            <List.Item.Meta
                                avatar={<img src={item.goods_image} style={{ width: 100 }} />}
                                title={item.goods_name}
                                description={<div className="price">
                                    <span>{item.goods_price}</span>
                                    <Icon type="close" style={{ fontSize: 10, marginRight: 5 }} />
                                    <InputNumber
                                        size="small"
                                        min={1}
                                        max={10}
                                        value={item.goods_qty}
                                        onChange={changeQty.bind(this, item.goods_id)}
                                    />
                                </div>}
                            />
                        </List.Item>
                    )}
                />
                <Divider />
                <Row>
                    <Col span={12}>
                        <Button type="danger" icon="delete">清空购物车</Button>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        总价：<span className="price"><span>{totalPrice}</span></span>
                    </Col>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" size="large">结算</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Cart;