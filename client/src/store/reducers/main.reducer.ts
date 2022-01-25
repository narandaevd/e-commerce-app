import Redux, {combineReducers} from 'redux';
import Main from './main.types';

import countReducer, {mapStateToProps as mapCounterStateToProps, mapDispatchToProps as mapCounterDispatchToProps} from './counter/counter.reducer';

const mainReducer: Redux.Reducer = combineReducers({
    counter: countReducer,
});
function mapStateToProps(state: any): Main.mapStateToProps {
    return {
        ...mapCounterStateToProps(state)
    }
}
function mapDispatchToProps(dispatch: Redux.Dispatch): Main.mapDispatchToProps {
    return {
        ...mapCounterDispatchToProps(dispatch)
    }
}

export {mapStateToProps, mapDispatchToProps};
export default mainReducer;