import React from 'react';

// 引入组件
import Home from './pages/Home';

import TodoList from './components/TodoList'

function App() {
  return <div>
    <h1>App组件</h1>
    <Home/>

    <TodoList/>
  </div>
}

export default App;
