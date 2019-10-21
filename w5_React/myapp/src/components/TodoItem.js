import React from 'react';

function TodoItem({item,idx}){
    return (
        <tr>
            <td>{idx+1}</td>
            <td>{item.text}</td>
            <td>{item.time}</td>
            <td>{item.done ? '是':'否'}</td>
            <td>
                <button>完成</button>
                <button>删除</button>
            </td>
        </tr>
    )
}

export default TodoItem;