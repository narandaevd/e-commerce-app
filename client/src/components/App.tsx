import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../store/reducers/mainReducer';

// Components
import Header from './Header';

function App(props: any): React.ReactElement {
    console.log(props)
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
