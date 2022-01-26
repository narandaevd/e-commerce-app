import React from 'react';
import Main from '../store/reducers/main.types';
import { Box, styled, Container, Typography } from '@mui/material';
import Product from './Product';

const StyledProductList: React.FC<{}> = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 20px;
`

const Header: React.FC<{}> = styled(Box)`
    margin-top: 50px;
    margin-bottom: 50px;
`

function ProductList(): React.ReactElement {
  return (
      <Container>
        <Header>
            <Typography sx={{textAlign: 'center', fontSize: '50px'}}>
                Our products
            </Typography>
        </Header>
        <StyledProductList>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </StyledProductList>
      </Container>
    );
}

export default ProductList;
