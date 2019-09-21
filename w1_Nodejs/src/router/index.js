const express = require('express');
const Router = express.Router();

const proxy = require('http-proxy-middleware');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const goodsRouter = require('./goods');
// const userRouter = require('./user');

Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,PATCH,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else {
        next();
    }
})

Router.use('/goods', goodsRouter);
// Router.use('/user',userRouter);
// Router.use('/reg',regRouter);


Router.get('/jsonp', (req, res) => {
    // 获取回调函数名
    let { callback } = req.query;//getData

    // 读取数据库
    let person = { username: 'laoxie', password: 123456, gender: 'male' }

    // jsonp请求后端必须拼接js代码
    res.send(`${callback}(${JSON.stringify(person)})`);//getData(123)
})

Router.post('/cors', (req, res) => {
    // 设置响应头
    // 允许所有网站请求我的数据：*
    res.header('Access-Control-Allow-Origin', '*');
    // res.set('Access-Control-Allow-Origin','*')
    // res.set({
    //     'Access-Control-Allow-Origin':'*'
    // })

    let person = { username: 'xiaoxie', password: 123, gender: 'female' }
    res.send(person);
})

// 服务器代理
let kadMiddleware = proxy({
    // 目标网址
    target: 'http://www.360kad.com',
    // 修改请求源地址
    changeOrigin: true,
    pathRewrite: {
        "^/kad": "/"
    }
});
// 发起地址：http://localhost:1907/kad/product/GetSecKillList?channelCode=1032020&sort=4&type=1&externalCall=true&_=1569046567235
// -> http://www.360kad.com/kad/product/GetSecKillList?channelCode=1032020&sort=4&type=1&externalCall=true&_=1569046567235
// -> http://www.360kad.com/product/GetSecKillList?channelCode=1032020&sort=4&type=1&externalCall=true&_=1569046567235

// 目标：http://www.360kad.com/product/GetSecKillList?channelCode=1032020&sort=4&type=1&externalCall=true&_=1569046567235
Router.get('/kad/*', kadMiddleware, (req, res) => {
    console.log(666)
    // 
    res.send('data')
})

let qfMiddleware = proxy({
    // 目标网址
    target: 'http://www.1000phone.com',
    // 修改请求源地址
    changeOrigin: true,
    pathRewrite: {
        "^/qf": "/"
    }
});
Router.get('/qf/*', qfMiddleware, (req, res) => {
    console.log(666)
    res.send('data')
});

// 爬虫
Router.get('/jiuxian', (req, res) => {
    // request({
    //     method:'post',
    //     url:'http://www.wbiao.cn/shoubiao.html?pc=11',
    //     headers:{
    //         // ':authority': 'www.wbiao.cn',
    //         // ':method': 'GET',
    //         // ':path': '/shoubiao.html?pc=11',
    //         // ':scheme': 'https',
    //         // 'content-type':'application/x-www-form-urlencoded',
    //         // 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    //         // 'accept-encoding': 'gzip, deflate, br',
    //         // 'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    //         // 'cache-control': 'no-cache',
    //         //'cookie': 'OZ_1U_2037=vid=v99db2c5c0b106.0&ctime=1503507140&ltime=0; WBIAOID=fee01e3d0da8c342b0de56e82347007f29bbf6e9%7Ef2031346363c8b8807ab7be46c2b09d7; NTKF_T2D_CLIENTID=guest8B459F5E-9418-A43B-AED3-100253872D6F; _ga=GA1.2.872240365.1503507142; wbiaoid=a7c6342f4472ca38ceea6657d15d093a; wbiaoid.sig=WhH73lC5ruR2937tiLkVqecFQ6ZJNv_KaKskfoCT9h0; Qs_lvt_93213=1543476689%2C1544693773%2C1544747679%2C1544796153%2C1555915782; Qs_pv_93213=516703995900238100%2C2609682454945011700%2C778311158152414200%2C2047697628181445600%2C3048807931934993000; showNum=0; _gid=GA1.2.1664204492.1569046427; nTalk_CACHE_DATA={uid:wx_1000_ISME9754_guest8B459F5E-9418-A4,tid:1569046431238196}; acw_tc=76b20fe715690464748046938e3dcb989268d4ca786679174ad2945ee57cdd; wTk=GFdz3LYnAG8E5BhDKwPUS8AW; w_info=eyJlbnYiOiJwcm9kIn0=; Hm_lvt_d8e95c635d8135c55060c556fd69e039=1569046426,1569048331; Hm_lpvt_d8e95c635d8135c55060c556fd69e039=1569048340',
    //         //'pragma':' no-cache',
    //        //'referer': 'https://www.wbiao.cn/',
    //         // 'sec-fetch-mode': 'navigate',
    //         // 'sec-fetch-site': 'none',
    //         // 'sec-fetch-user': '?1',
    //         // 'upgrade-insecure-requests': '1',
    //         // 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
    //     }
    // }, (error, response, body) => {
    //     // error: 错误信息，默认null
    //     // response: 相应对象
    //     // body: 请求响应内容
    //     console.log(body)
    //     res.send(body)
    // })

    // http://list.jiuxian.com/1-2-0-0-0-0-0-0-0-0-0-0.htm?area=#v2
    request('http://list.jiuxian.com/1-2-0-0-0-0-0-0-0-0-0-0.htm?area=#v2', (err, response, body) => {
        let $ = cheerio.load(body);

        // 遍历每一个商品
        let goodslist = [];
        $('.proListSearch ul li').each((idx, li) => {
            let $li = $(li);
            let imgurl = $li.find('.img img').attr('src');
            

            //  提取文件名：
            let filename = path.basename(imgurl);
            
            let goods = {
                id: $li.attr('product-box'),
                imgurl:'imgs/'+filename,
                name: $li.find('.proName').text(),
                price: $li.find('.price span').text(),
                comment: $li.find('.judge span').text()
            }
            goodslist.push(goods);
            
            //  文件流
            // 利用request与stream数据流保存爬取到的图片到本地硬盘
             request(imgurl).pipe(fs.createWriteStream('./imgs/'+filename))
        })

        // 请求价格
        // http://list.jiuxian.com/act/selectPriceAndClubPriceByProIds.htm?ids=
        let ids = goodslist.map(item=>item.id).join();
        request('http://list.jiuxian.com/act/selectPriceAndClubPriceByProIds.htm?ids='+ids,(err,r,body)=>{
            console.log('style:',body)
            body = JSON.parse(body);
            goodslist = goodslist.map(item=>{
                // 获取当前商品对应的价格
                let currentPrice = body.data.filter(goods=>goods.productId == item.id)[0]
                item.price = currentPrice.price;
                item.clubPrice = currentPrice.clubPrice
                return item;
            });

            res.send(goodslist)
        })

        
    })

});

module.exports = Router;