import React from 'react';

// 函数组件
// function Home(){
//     return <div>
//         home
//     </div>
// }

// 类组件
class Home extends React.Component{
    // 构造器
    constructor(){
        // 当前类如果继承自其他类，则在构造函数中必须使用super进行继承
        super();// React.Component.apply(this,arguments)

        // 组件状态（数据）
        this.state = {
            title:'首页',
            menu:['首页','注册','登录','购物车']
        }

        this.changeMenu = this.changeMenu.bind(this);
    }

    // 自定义函数
    // 自定函数默认无this
    changeMenu(item){
        console.log(666)
        // this.state.title =xxx
        this.setState({
            title:item
        })
    }
    render(){
        return (
            <div>
                {this.state.title}

                <ul>
                    {
                        // this.state.menu.map(item=>{
                        //     return <li>{item}</li>
                        // })
                        this.state.menu.map(item=><li key={item} onClick={this.changeMenu.bind(null,item)}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default Home;