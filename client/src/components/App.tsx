import Redux from 'redux';
import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../store/reducers/main.reducer';

import Main from '../store/reducers/main.types';

// Components
import Header from './Header';

const App: React.FC<Main.mapStoreToProps> = (props) => {
    return (
        <React.Fragment>
            <Header />
            <div>
                {props.counter.value}
                <button onClick={() => props.onDec()}>-1</button>
                <button onClick={() => props.onReset()}>0</button>
                <button onClick={() => props.onInc()}>+1</button>
            </div>
        </React.Fragment>
    )
} 

export default connect<Main.mapStateToProps, Main.mapDispatchToProps, any, Main.mapStoreToProps>(mapStateToProps, mapDispatchToProps)(App);
