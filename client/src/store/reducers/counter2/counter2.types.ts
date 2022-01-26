import Redux from 'redux';
namespace Counter2 {
    export interface removeAmountAction extends Redux.Action<string> {
        amount: number,
    };
    export interface addAmountAction extends Redux.Action<string> {
        amount: number,
    };
    export interface resetToValueAction extends Redux.Action<string> {
        newValue: number,
    };
    export interface initialState {
        someValue: number,
        flag: boolean,
    };
    export interface StateToProps {
        counter2: {
            someValue: number,
            flag: boolean,
        }
    };
    export interface DispatchToProps {
        onAddAmount: (amount: number) => any,
        onRemoveAmount: (amount: number) => any,
        onResetAmount: (newValue: number) => any,
    };
}

export default Counter2;