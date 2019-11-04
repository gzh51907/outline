import React, { Component } from 'react';

import { Tabs, Row,Col,Pagination,Input,Button } from 'antd';

import Api from '@/Api';

/**
 * HTML5新特性之：FormDate
 */

class Upload extends Component {
    uploadFile = async ()=>{
        let avatar = document.querySelector('#avatar');
        let myData = new FormData();
        // myData.set('avatar',avatar.files[0]);

        // 多个商品处理方式
        for(let i=0;i<avatar.files.length;i++){
            myData.append('goods',avatar.files[i]);
        }

        console.log('myData:',myData)

        let {data} =  await Api.axios.post('http://localhost:1907/upload/goods',myData);
        console.log('data:',data)
    }
    render(){
        return (
            <div>
                <h2>头像上传</h2>
                <form action="http://localhost:1907/upload/avatar" method="post" encType="multipart/form-data">
                    <input name="avatar" type="file"/>
                    <button type="submit">上传</button>  
                </form>

                <h2>商品上传</h2>
                <form action="http://localhost:1907/upload/goods" method="post" encType="multipart/form-data">
                    <input name="goods" type="file" multiple/>
                    <button type="submit">上传</button>  
                </form>

                <h2>ajax请求上传图片</h2>
                <Input.Search type="file" multiple
                id="avatar"
                onSearch={this.uploadFile}
                enterButton={<Button type="primary">上传</Button>}
                />
                
            </div>
        )
    }
}

export default Upload;