import {Counter, INCREMENT, DECREMENT} from './types';

export function increment(newCounter: Counter){
    return {
        type: INCREMENT
    }
}

export function decrement(newCounter: Counter){
    return {
        type: DECREMENT
    }
}
