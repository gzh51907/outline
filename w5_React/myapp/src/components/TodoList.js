import React from 'react';

import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

class TodoList extends React.Component{
    constructor(){
        super();
        this.state = {
            datalist:[{
                id:1,
                text:'程序员节日1024，项目上线',
                done:false,
                time:'2019-10-24'
            },{
                id:2,
                text:'双11，光棍，买买买',
                done:false,
                time:'2019-11-11'
            }]
        }

        // 普通的方法默认没有this，需要在初始化时绑定this
        this.addItem = this.addItem.bind(this)
    }
    // 添加方法
    addItem(text){
        let {datalist} = this.state;
        let item = {
            id:datalist.length+1,
            text,
            done:false,
            time:Date.now()
        }

        // 修改state
        // 错误写法：this.state.datalist.push()
        // react的state修改逻辑：重写一份并覆盖
        this.setState({
            datalist:[item,...datalist]
        })
    }
    // 删除
    removeItem(id){
        let {datalist} = this.state;
        datalist = datalist.filter(item=>item.id!=id);
        this.setState({datalist})
    }
    // 完成
    completeItem(id){
        let {datalist} = this.state;
        datalist = datalist.map(item=>{
            if(item.id === id){
                item.done = true;
            }
            return item;
        })
    }
    render(){
        let {datalist} = this.state;
        return (
            <div>
                <TodoForm></TodoForm>
                <TodoContent datalist={datalist}></TodoContent>
            </div>
        )
    }
}

export default TodoList;