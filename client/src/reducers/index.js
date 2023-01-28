import {applyMiddleware, combineReducers,legacy_createStore as createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import fileReducer from './fileReduser'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  user:userReducer,
  files:fileReducer,
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))