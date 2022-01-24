import Redux, {combineReducers} from 'redux';
import countReducer, {mapStateToProps as mapCounterStateToProps, mapDispatchToProps as mapCounterDispatchToProps} from './countReducer';

const mainReducer: Redux.Reducer = combineReducers({
    counter: countReducer,
});

function mapStateToProps(state: any): object {
    return {
        ...mapCounterStateToProps(state)
    }
}
function mapDispatchToProps(dispatch: any): object {
    return {
        ...mapCounterDispatchToProps(dispatch)
    }
}

export {mapStateToProps, mapDispatchToProps};
export default mainReducer;