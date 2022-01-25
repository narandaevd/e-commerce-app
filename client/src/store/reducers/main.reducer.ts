import Redux, {combineReducers} from 'redux';
import Main from './main.types';

import counter from './counter/counter.reducer';
import counter2 from './counter2/counter2.reducer';

const mainReducer: Redux.Reducer = combineReducers({
    counter: counter.reducer,
    counter2: counter2.reducer,
});
function mapStateToProps(state: any): Main.StateToProps {
    return {
        ...counter.mapStateToProps(state),
        ...counter2.mapStateToProps(state),
    }
}
function mapDispatchToProps(dispatch: Redux.Dispatch): Main.DispatchToProps {
    return {
        ...counter.mapDispatchToProps(dispatch),
        ...counter2.mapDispatchToProps(dispatch)
    }
}

export {mapStateToProps, mapDispatchToProps};
export default mainReducer;