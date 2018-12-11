import {createStore} from 'redux'

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./action";



import todoApp from './reducer'

let store = createStore(todoApp);
