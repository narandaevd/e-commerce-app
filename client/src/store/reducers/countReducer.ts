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

function mapStateToProps(state: any): object {
    return {
        counter: state.counter
    }
}
function mapDispatchToProps(dispatch: Redux.Dispatch): object {
    return {
        onInc: (): Redux.Dispatch => dispatch(incrementAC()),
        onDec: (): Redux.Dispatch => dispatch(decrementAC()),
        onReset: (): Redux.Dispatch => dispatch(resetAC()),
    }
}

export {mapStateToProps, mapDispatchToProps};
export default countReducer;