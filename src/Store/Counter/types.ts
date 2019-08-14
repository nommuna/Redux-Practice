// Describe the shape of the counter
export interface Counter {
    count: number;
}


//Describe the different actions of the counter
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

interface incrementAction {
    type: typeof INCREMENT;
}

interface decrementAction {
    type: typeof DECREMENT;
}

export type CounterActionTypes = incrementAction | decrementAction;


