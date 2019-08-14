import {Counter, INCREMENT, DECREMENT, CounterActionTypes} from './types';

// Initialize the current state and set it to type counter
const initialState: Counter = {
    count: 0
}

// Create the reducer that will implement the state depending on an action
export function counterReducer(state = initialState, action: CounterActionTypes): Counter {
    switch(action.type) {
        case INCREMENT:
            return { count: state.count + 1};
        case DECREMENT:
            return {count: state.count - 1};
        default:
            return state;
    }
}