import { createStore } from 'redux'
import { countReducer } from './reducer'

const store = createStore(countReducer)

export default store
