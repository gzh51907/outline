import React, { Component } from 'react';
import { List,InputNumber,Avatar,Icon,Button,Tooltip,Row,Col,Divider} from 'antd'

class Cart extends Component {
    state = {
        goodslist: [{
            id: "1",
            name: "huawei mate30 pro",
            imgurl:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
            price: 5998,
            qty: 10
        },
        {
            id: "2",
            name: "xiaomi9",
            imgurl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571131475&di=2df2d3a54a89db9e09952799acb25261&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8488db95efa140b9c50cb4615e2ca337a6981aa7.jpg",
            price: 2999,
            qty: 2
        },
        {
            id: "3",
            name: "onePlus9 pro",
            imgurl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
            price: 3999,
            qty: 1
        }]
    }
    changeQty = (id,qty)=>{
        let {goodslist} = this.state;
        goodslist = goodslist.map(item=>{
            if(item.id == id){
                item.qty = qty
            }
            return item;
        })

        this.setState({
            goodslist
        })
    }
    componentDidMount() {



    }
    render() {
        let { goodslist } = this.state;
        return (
            <div style={{padding:15}}>
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
                                    <Icon type="delete" style={{color:'#f00'}}/>
                            </Tooltip>]}
                        >
                            <List.Item.Meta
                                avatar={<img src={item.imgurl} style={{width:100}} />}
                                title={item.name}
                                description={<div className="price">
                                    <span>{item.price}</span> 
                                    <Icon type="close" style={{fontSize:10,marginRight:5}} />
                                    <InputNumber 
                                    size="small" 
                                    min={1} 
                                    max={10} 
                                    value={item.qty} 
                                    onChange={this.changeQty.bind(this,item.id)}
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
                    <Col span={12} style={{textAlign:'right'}}>
                        总价：<span className="price"><span>666</span></span>
                    </Col>
                    <Col span={24} style={{textAlign:'right'}}>
                        <Button type="primary" size="large">结算</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Cart;