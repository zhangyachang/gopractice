// 2. reducer 定义你将来 要做的事情
export function reducer(state=10, action) {

  switch (action.type) {
    case 'addTank':
      return state + 1;
    case 'reduceTank':
      return state - 1;
    default:
      return 100;
  }
}

export function add() {
  return {
    type: 'addTank'
  }
}

export function reduce() {
  return {
    type: 'reduceTank'
  }
}

// 利用中间件处理异步 延迟2秒去更改状态
export function addCannonAsync() {
  // 可以返回函数
  return function (dispatch) {
    setTimeout(() => {
      dispatch(add())
    },2000)
  }
}











