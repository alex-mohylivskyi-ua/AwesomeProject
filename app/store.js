import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import exerciseManagerReducer from '../features/exercise/exerciseManagerSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    exerciseManager: exerciseManagerReducer
  }
})