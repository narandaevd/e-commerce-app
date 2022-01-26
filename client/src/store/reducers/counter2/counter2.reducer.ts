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

function reducer(state: Counter2.initialState = initialState, action: Redux.Action<string>): object {
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

const removeAmountAC: Redux.ActionCreator<Counter2.removeAmountAction> = (amount: number): Counter2.removeAmountAction => {
    return {
        type: REMOVE_2,
        amount: amount,
    }
}
const addAmountAC: Redux.ActionCreator<Counter2.addAmountAction> = (amount: number): Counter2.addAmountAction => {
    return {
        type: ADD_2,
        amount: amount
    }
}
const resetAmountAC: Redux.ActionCreator<Counter2.resetToValueAction> = (value: number): Counter2.resetToValueAction => {
    return {
        type: RESET_2,
        newValue: value
    }
}

function mapDispatchToProps(dispatch: Redux.Dispatch): Counter2.DispatchToProps {
    return {
        onAddAmount: (amount) => dispatch(addAmountAC(amount)),
        onRemoveAmount: (amount) => dispatch(removeAmountAC(amount)),
        onResetAmount: (value) => dispatch(resetAmountAC(value)),
    }
}

const counter2Wrap: Utils.ReducerWrap<Counter2.StateToProps, Counter2.DispatchToProps> = {
    reducer,
    mapStateToProps,
    mapDispatchToProps
};
export default counter2Wrap;