const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry:'./src/main.js',

    // 测试服务器（为了在开发环境中测试使用，编译打包后就没有服务器了）
    devServer:{
        contentBase:path.join( __dirname,'./src') //f:\wwx\xx\src
    },

    // 加载器loader
    module:{
        rules:[
            // 编译JSX->需要babel->需要babel-loader
            {
                test:/\.jsx?$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react']
                    }
                }],
                // use的简写
                // loader:['babel-loader']
            },

            // 其他加载器
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/template.html',
            // filename:'index.html'
        })
    ]
}