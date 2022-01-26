import Redux from 'redux';
import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../store/reducers/main.reducer';

import Main from '../store/reducers/main.types';

// Components
import Header from './Header';

const App: React.FC<Main.StoreToProps> = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <Header />
            <div>
                {props.counter2.someValue}
                <button onClick={() => props.onRemoveAmount(10)}>-2</button>
                <button onClick={() => props.onResetAmount(5)}>0</button>
                <button onClick={() => props.onAddAmount(10)}>+2</button>
            </div>
            <div>
                {props.counter.value}
                <button onClick={() => props.onDec()}>-1</button>
                <button onClick={() => props.onReset()}>0</button>
                <button onClick={() => props.onInc()}>+1</button>
            </div>
        </React.Fragment>
    )
} 

export default connect<Main.StateToProps, Main.DispatchToProps, any, Main.StoreToProps>(mapStateToProps, mapDispatchToProps)(App);
