import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <form action="http://localhost:1907/upload/avatar" enctype="multipart/form-data">
            <input name="avatar" type="file"/>
            <button type="submit">上传</button>  
        </form>
    </div>
  );
}

export default App;
