import {createStore} from 'redux'

import todoApp from './reducer'

let store = createStore(todoApp);


// 打印初始状态
console.log(store.getState());

// 每次state更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器






