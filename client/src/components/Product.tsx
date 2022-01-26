import React from 'react';
import {Box, styled, Typography, Button} from '@mui/material';

const StyledProduct: React.FC = styled(Box)`
    width: 200px;
    height: 300px;
    border: 1px black solid;
`

function Product(): React.ReactElement {
  return (
    <StyledProduct>
        <Box sx={{height: '200px', border: '1px solid black'}}></Box>
        <Box>
            qwdq
        </Box>
        <Button>
            add to cart
        </Button>
    </StyledProduct>
  );
}

export default Product;
