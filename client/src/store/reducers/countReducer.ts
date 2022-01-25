import Redux from 'redux';
const START_LOAD: string = 'START_LOAD';    
const INCREMENT: string = 'INCREMENT';    
const DECREMENT: string = 'DECREMENT';    
const RESET: string = 'RESET';    

const startLoadAC: Function = (): object => ({
    type: START_LOAD,
})
const incrementAC: Function = (): object => ({
    type: INCREMENT
})
const decrementAC: Function = (): object => ({
    type: DECREMENT
})
const resetAC: Function = (): object => ({
    type: RESET
})

interface counterState {
    value: number;
}

const initialState: counterState = {value: -6};

function countReducer(state: counterState = initialState, action: Redux.Action): object {
    switch (action.type) {
        case START_LOAD:
            return state;
        case INCREMENT:
            return {...state, value: state.value + 1};
        case DECREMENT:
            return {...state, value: state.value - 1};
        case RESET:
            return {...state, value: 0};
        default:
            return state;
    }
}

export interface mapCounterStateToPropsInterface {
    counter: {
        value: number
    }
}
export interface mapCounterDispatchToPropsInterface {
    onInc: () => any | void,
    onDec: () => any | void,
    onReset: () => any | void,
}

function mapStateToProps(state: any): mapCounterStateToPropsInterface {
    return {
        counter: state.counter
    }
}
function mapDispatchToProps(dispatch: Redux.Dispatch<any>): mapCounterDispatchToPropsInterface {
    return {
        onInc: () => dispatch(incrementAC()),
        onDec: () => dispatch(decrementAC()),
        onReset: () => dispatch(resetAC()),
    }
}

export {mapStateToProps, mapDispatchToProps};
export default countReducer;