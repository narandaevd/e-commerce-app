import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from '../store/reducers/main.reducer';
import {Routes, Route} from 'react-router-dom';

import Main from '../store/reducers/main.types';

// Components
import Header from './Header';
import CompanySection from './CompanySection';
import ProductList from './ProductList';
import Cart from './Cart';

const App: React.FC<Main.StoreToProps> = (props) => {

    fetch('http://localhost:3000/api/images/3')
        .then(res => res.json())
        .then(json => console.log(json));

    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route path='/' 
                    element={
                        <React.Fragment>
                            <CompanySection />
                            <ProductList />
                        </React.Fragment>
                    }
                />
                <Route 
                    path='/cart' 
                    element={<Cart />}
                />
            </Routes>
        </React.Fragment>
    )
} 

export default connect<Main.StateToProps, Main.DispatchToProps, any, Main.StoreToProps>(mapStateToProps, mapDispatchToProps)(App);
