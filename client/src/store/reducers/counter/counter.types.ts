namespace Counter {
    export interface counterInitialState {
        value: number
    };
    export interface mapStateToProps {
        counter: {
            value: number
        }
    };
    export interface mapDispatchToProps {
        onInc: () => any | void,
        onDec: () => any | void,
        onReset: () => any | void,
    };
}

export default Counter;