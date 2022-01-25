import Redux, {createStore, applyMiddleware, compose} from 'redux';
import mainReducer from './reducers/main.reducer';

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store: Redux.Store = createStore(mainReducer, composeEnhancers());

store.subscribe(() => {console.log(store.getState())})
export default store;