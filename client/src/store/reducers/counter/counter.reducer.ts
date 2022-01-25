import Redux from 'redux';
import Counter from './counter.types';
import Utils from '../utils';

const START_LOAD: string = 'START_LOAD';    
const INCREMENT: string = 'INCREMENT';    
const DECREMENT: string = 'DECREMENT';    
const RESET: string = 'RESET';    

const startLoadAC: Function = (): Redux.Action => ({
    type: START_LOAD,
})
const incrementAC: Function = (): Redux.Action => ({
    type: INCREMENT
})
const decrementAC: Function = (): Redux.Action => ({
    type: DECREMENT
})
const resetAC: Function = (): Redux.Action => ({
    type: RESET
})

const initialState: Counter.initialState = {value: -6};

function reducer(state: any = initialState, action: Redux.Action): object {
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

function mapStateToProps(state: any): Counter.StateToProps {
    return {
        counter: state.counter
    }
}
function mapDispatchToProps(dispatch: Redux.Dispatch<Redux.Action<any>>): Counter.DispatchToProps {
    return {
        onInc: () => dispatch(incrementAC()),
        onDec: () => dispatch(decrementAC()),
        onReset: () => dispatch(resetAC()),
    }
}

const counterWrap: Utils.ReducerWrap<Counter.StateToProps, Counter.DispatchToProps> = {
    reducer, mapStateToProps, mapDispatchToProps,
} 
export default counterWrap;