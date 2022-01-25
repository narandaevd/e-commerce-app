namespace Counter {
    export interface initialState {
        value: number
    };
    export interface StateToProps {
        counter: {
            value: number
        }
    };
    export interface DispatchToProps {
        onInc: () => any,
        onDec: () => any,
        onReset: () => any,
    };
}

export default Counter;