import Utils from '../utils';
import Counter2 from './counter2.types';
import Redux from 'redux';

const ADD_2: string = "ADD_2";
const REMOVE_2: string = "REMOVE_2";
const RESET_2: string = "RESET_2";

const initialState: Counter2.initialState = {
    someValue: 3,
    flag: true,
}

function reducer(state: any = initialState, action: Redux.Action): object {
    switch (action.type) {
        case ADD_2:
            return {...state, someValue: state.someValue + 2};
        case REMOVE_2:
            return {...state, someValue: state.someValue - 2};
        case RESET_2:
            return {...state, someValue: 0};
        default:
            return state;
    }
}
function mapStateToProps(state: any): Counter2.StateToProps {
    return {
        counter2: {
            someValue: state.counter2.someValue,
            flag: state.counter2.flag,
        }
    }
}

function remove2AC(): Redux.Action {
    return {
        type: REMOVE_2,
    }
}
function add2AC(): Redux.Action {
    return {
        type: ADD_2,
    }
}
function reset2AC(): Redux.Action {
    return {
        type: RESET_2,
    }
}

function mapDispatchToProps(dispatch: Redux.Dispatch): Counter2.DispatchToProps {
    return {
        onAdd2: () => dispatch(add2AC()),
        onRemove2: () => dispatch(remove2AC()),
        onReset2: () => dispatch(reset2AC()),
    }
}

const counter2Wrap: Utils.ReducerWrap<Counter2.StateToProps, Counter2.DispatchToProps> = {
    reducer,
    mapStateToProps,
    mapDispatchToProps
};
export default counter2Wrap;