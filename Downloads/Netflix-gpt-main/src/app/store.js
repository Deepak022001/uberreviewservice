// import { counterReducer } from '../features/counter/counterSlice.spec';
// import { configureStore } from '@reduxjs/toolkit';
// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
