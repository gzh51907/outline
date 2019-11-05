# Hybrid

## day8-1

* App分类
    * WebApp
    * NativeApp
    * HybridApp
        * webview: 浏览器

* HybridApp
    * Native主导
        * native提供接口，h5调用
        * H5提供接口，Native调用
        ```js
            btn.onclick = ()=>{
                window.moxiu.exit()
            }
        ```
    * H5主导