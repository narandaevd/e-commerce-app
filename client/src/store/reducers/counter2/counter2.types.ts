import Redux from 'redux';
namespace Counter2 {
    export interface initialState {
        someValue: number,
        flag: boolean,
    }
    export interface StateToProps {
        counter2: {
            someValue: number,
            flag: boolean,
        }
    }
    export interface DispatchToProps {
        onAdd2: () => any,
        onRemove2: () => any,
        onReset2: () => any,
    }
}

export default Counter2;