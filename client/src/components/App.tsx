import Redux from 'redux';
import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../store/reducers/main.reducer';

import Main from '../store/reducers/main.types';

// Components
import Header from './Header';
import CompanySection from './CompanySection';
import ProductList from './ProductList';

const App: React.FC<Main.StoreToProps> = (props) => {
    console.log(props);
    return (
        <React.Fragment>
            <Header />
            <CompanySection />
            <ProductList />
        </React.Fragment>
    )
} 

export default connect<Main.StateToProps, Main.DispatchToProps, any, Main.StoreToProps>(mapStateToProps, mapDispatchToProps)(App);
