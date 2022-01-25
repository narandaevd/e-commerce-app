import Counter from './counter/counter.types';
import Counter2 from './counter2/counter2.types';

namespace Main {
    export interface StateToProps extends 
        Counter.StateToProps,
        Counter2.StateToProps 
    {};
    export interface DispatchToProps extends 
        Counter.DispatchToProps, 
        Counter2.DispatchToProps
    {};
    export interface StoreToProps extends 
        StateToProps, 
        DispatchToProps 
    {};
}

export default Main;