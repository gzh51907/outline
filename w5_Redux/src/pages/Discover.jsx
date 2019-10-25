import React, { Component } from 'react';

import { Tabs, Switch } from 'antd';
import {Route} from 'react-router-dom';

import Api from '@/Api';

import List from './List'

class Discover extends Component {
    state = {
        activeKey:'',
        menu:[],
        tabData:{
            // 256:[],257:[],
        }
    }
    changeType = async (gc_id)=>{
        let {history} = this.props;

        // let {tabData} = this.state;
        // let {datas} = await Api.get({
        //     act:'goods_class',
        //     op:'get_child_all',
        //     gc_id
        // });

        // // let tabId = datas.class_list[0].gc_id;
        // let data = datas.class_list[0].child
        // tabData[gc_id] = data;

        // this.setState({
        //     tabData
        // })
        history.push('/discover/'+gc_id)


    }
    async componentDidMount(){
        let {datas} = await Api.get({
            act:'goods_class'
        });

        this.setState({
            menu:datas.class_list,
            activeKey:datas.class_list[0].gc_id
        })

        this.changeType(datas.class_list[0].gc_id)

    }
    render() {
        let {menu,activeKey,tabData} = this.state;
        let {match} = this.props
        return (
            <div>
                <Tabs 
                defaultActiveKey={activeKey} 
                tabPosition='top'
                onChange={this.changeType}
                >
                    {menu.map((item,idx) => (
                        <Tabs.TabPane tab={item.gc_name} key={item.gc_id}>
                            
                            {/* {
                                tabData[item.gc_id] ? 
                                <Tabs 
                                    tabPosition='left'
                                    style={{height:500}}
                                >
                                    {
                                    tabData[item.gc_id].map(it=>(
                                            <Tabs.TabPane tab={it.gc_name} key={it.gc_id}>
                                                <img src={it.gc_image}/>
                                            </Tabs.TabPane>
                                        ))
                                    }
                                </Tabs>
                                :
                                '无数据'
                            } */}
                            <Route path={match.path+"/:gc_id"} component={List} />
                            
                        </Tabs.TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
}


export default Discover;