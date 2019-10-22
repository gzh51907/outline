import React from 'react';
import MyContext from '../context';
import TodoButton from './TodoButton';
function formatDate(time){
    return new Date(time).toLocaleDateString();
}
function TodoItem({item,idx}){
    return (
        <tr>
            <td>{idx+1}</td>
            <td>{item.text}</td>
            <td>{formatDate(item.time)}</td>
            <td>{item.done ? '是':'否'}</td>
            <td>
                <MyContext.Consumer>
                {
                    ({completeItem,removeItem})=>{
                        return (
                            <>
                                {/* <button onClick={completeItem.bind(this,item.id)}>完成</button>
                                <button onClick={removeItem.bind(this,item.id)}>删除</button> */}
                                <TodoButton onClick={completeItem.bind(this,item.id)}>完成</TodoButton>
                                <TodoButton onClick={removeItem.bind(this,item.id)}>删除</TodoButton>
                            </>
                        )
                    }
                }
                </MyContext.Consumer>
                
                
            </td>
        </tr>
    )
}

export default TodoItem;