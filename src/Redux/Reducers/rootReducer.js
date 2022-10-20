import {combineReducers}from 'redux'
import { favReducer } from './favReducer'
import { counterReducer } from './counterReducer'

export default combineReducers({favReducer,counterReducer})