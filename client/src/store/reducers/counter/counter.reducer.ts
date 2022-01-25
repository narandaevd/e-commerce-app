import Redux from 'redux';
import Counter from './counter.types';

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

const initialState: Counter.counterInitialState = {value: -6};

function countReducer(state: Counter.counterInitialState = initialState, action: Redux.Action): object {
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

function mapStateToProps(state: any): Counter.mapStateToProps {
    return {
        counter: state.counter
    }
}
function mapDispatchToProps(dispatch: Redux.Dispatch<any>): Counter.mapDispatchToProps {
    return {
        onInc: () => dispatch(incrementAC()),
        onDec: () => dispatch(decrementAC()),
        onReset: () => dispatch(resetAC()),
    }
}

export {mapStateToProps, mapDispatchToProps};
export default countReducer;