import React from 'react';
import {
  Box,
  Button, 
  styled, 
  AppBar,
  Typography,
  Toolbar,
} from '@mui/material';

const StyledToolbar: React.FC<any> = styled(Toolbar)`
  justify-content: space-between;
`;

const StyledAppBar: React.FC<any> = styled(AppBar)`
  /* background-color: #fff;
  color: black;
  border-bottom: 1px black solid;
  box-shadow: none; */
`;

const AppBarButton: React.FC<any> = styled(Button)`
  color: inherit;
`

export default function Header(): React.ReactElement {
  return (
    <StyledAppBar position='relative'>
        <StyledToolbar color='inherit'>
          <Box>
            <AppBarButton size='large'>Shop</AppBarButton>
            <AppBarButton size='large' sx={{marginLeft: '10px'}}>Explore</AppBarButton>
          </Box>
          <Typography textTransform={'uppercase'}>shopname</Typography>
          <AppBarButton size='large'>my cart</AppBarButton>
        </StyledToolbar>
    </StyledAppBar> 
  );
}
