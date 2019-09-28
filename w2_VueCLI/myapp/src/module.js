export var username = 'laoxie'

function show(){
    return 'hello my name is ' + username;
}

// 往模块对象中添加default属性,值为show
export default show;

// 往模块对象中添加show属性,等效与export function show(){}
export {show}