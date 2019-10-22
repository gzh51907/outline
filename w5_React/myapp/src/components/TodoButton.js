import React from 'react';

function TodoButton({onClick,children}){
    console.log('children:',children)
    return <button onClick={onClick}>{children}</button>
}

export default TodoButton;