import {createStore} from 'redux'


function counter(state=0, action) {
  switch (action.type) {
    case 'reduce':
      return state-1;
    case 'add':
      return state+1;
    default:
      return state;
  }
}


// 创建 Redux store来存放应用的状态
// API 是 {subscribe, dispatch, getState}

let store = createStore(counter);



// 可以手动订阅更新，也可以事件绑定到视图层
console.log('订阅一个函数');

store.subscribe(function () {
  console.log('订阅了' + store.getState());
});


// 改变state唯一方法是dispatch一个action
// action可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行


console.log('打印的东西是store');
console.log(store);
store.dispatch({type: 'reduce'});
store.dispatch({type: 'reduce'});
store.dispatch({type: 'reduce'});
store.dispatch({type: 'add'});
console.log(store.getState());























