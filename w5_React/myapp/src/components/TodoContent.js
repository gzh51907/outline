import React from 'react';

import TodoItem from './TodoItem'
function TodoContent({datalist}){
    console.log('TodoContent:',datalist)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>内容</th>
                        <th>时间</th>
                        <th>是否完成</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                {
                    datalist.map((item,idx)=>{
                        return <TodoItem key={item.id} item={item} idx={idx}/>
                    })
                }
                </tbody>
            </table>
            
        </div>
    )
}

export default TodoContent;