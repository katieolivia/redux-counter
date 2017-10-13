// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = true;

const initialState = {
    currentValue: 0,
    previousValue: [],
    futureValue: []
}

const INCREMENT = 'INCREMENT';

const DECREMENT = 'DECREMENT';

const UNDO = 'UNDO';

const REDO = 'REDO';


export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { 
                currentValue: state.currentValue + action.amount,
                previousValue: [state.currentValue, ...state.previousValue],
                futureValue: []
            };
        case DECREMENT:
            return { 
                currentValue: state.currentValue - action.amount,
                previousValue: [state.currentValue, ...state.previousValue],
                futureValue: [] 
            };
        case UNDO:
            return {
                currentValue: state.previousValue[0],
                previousValue: state.previousValue.slice(1),
                futureValue: [state.currentValue, ...state.futureValue]
            };
        case REDO:
            return {
                currentValue: state.futureValue[0],
                previousValue: [state.currentValue, ...state.previousValue],
                futureValue: state.futureValue.slice(1)
            };

        default:
            return state;
    }
}

export function increment(amount) {
    return {
        type: INCREMENT,
        amount: amount
    }
}

export function decrement(amount) {
    return {
        type: DECREMENT,
        amount: amount
    }
}

export function undo() {
    return {
        type: UNDO
    }
    
}


export function redo() {
    return {
        type: REDO
    }

}


