import Redux, {combineReducers} from 'redux';
import countReducer, {mapStateToProps as mapCounterStateToProps, mapDispatchToProps as mapCounterDispatchToProps} from './countReducer';

import { mapCounterStateToPropsInterface, mapCounterDispatchToPropsInterface } from './countReducer';

export interface mapStateToPropsInterface extends mapCounterStateToPropsInterface {
}
export interface mapDispatchToPropsInterface extends mapCounterDispatchToPropsInterface {
}
export interface mapStoreToProps extends mapStateToPropsInterface, mapDispatchToPropsInterface {
}

const mainReducer: Redux.Reducer = combineReducers({
    counter: countReducer,
});
function mapStateToProps(state: any): mapStateToPropsInterface {
    return {
        ...mapCounterStateToProps(state)
    }
}
function mapDispatchToProps(dispatch: any): mapDispatchToPropsInterface {
    return {
        ...mapCounterDispatchToProps(dispatch)
    }
}

export {mapStateToProps, mapDispatchToProps};
export default mainReducer;