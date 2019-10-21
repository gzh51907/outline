import React,{Component,createRef} from 'react';

import MyContext from '../context'

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            keyword:'',
            // inputDOM:createRef()
        }

        this.changeKeyword = this.changeKeyword.bind(this)
        this.add = this.add.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }
    changeKeyword(e){
        // 事件处理函数必须改变keyword的值
        this.setState({
            keyword:e.target.value
        })
    }
    add(){
        let {keyword} = this.state;
        // this.props.addItem
        this.props.addItem(keyword)

        this.setState({
            keyword:''
        })

        // this.refs.keyword.focus();
        // console.log('inputDOM:',this.state.inputDOM)
        // this.state.inputDOM.current.focus();

        this.inputDOM.focus();
    }
    handleEnter(e){
        if(e.keyCode === 13){
            this.add()
        }
    }
    render(){
        console.log('todoForm.context:',this.context)
        let {keyword,inputDOM} = this.state;
        return (
            <div>
                {/* <input type="text" ref={inputDOM} value={keyword} onChange={this.changeKeyword} /> */}
                <input type="text" ref={el=>{this.inputDOM=el}} 
                value={keyword} 
                onChange={this.changeKeyword}
                onKeyUp={this.handleEnter}
                 />
                <button onClick={this.add}>添加</button>
            </div>
        )
    }

}

// Context共享第2步：子组件设置静态属性contextType
TodoForm.contextType = MyContext;

export default TodoForm;