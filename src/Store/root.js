import {configureStore, createSlice} from 'redux-starter-kit';

export const counterSlice = createSlice({
    slice: 'counter',
    initialState: 0,
    reducers: {
      increment: state => state + 1,
      decrement: state => state - 1,
    }
});

export const store = configureStore({
    reducer: {
        count: counterSlice.reducer
    }
});