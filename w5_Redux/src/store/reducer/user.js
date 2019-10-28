/**
 * 关于用户
 */
let initialState = {
    user:null,
    token:''
}

function reducer(state=initialState,{type,payload}){
    switch(type){
        // {type:'LOGIN',payload:{user,token}}
        case 'LOGIN':
            return {
                user,
                token
            }
         // {type:'LOGIN'}
         case 'LOGOUT':
            return {
                user:null,
                token:''
            } 
        default:
                return state;

    }
}

export default reducer;