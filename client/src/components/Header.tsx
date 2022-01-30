import React from 'react';
import Mui, {
  Box,
  Button, 
  styled, 
  AppBar,
  Typography,
  Toolbar,
  Container,
} from '@mui/material';
import ReactRouterDom, { 
  NavLink, 
  useLocation 
} from 'react-router-dom';

const StyledToolbar: React.FC<Mui.ToolbarProps<any>> = styled(Toolbar)`
  justify-content: space-between;
`;

const StyledAppBar: React.FC<Mui.AppBarProps<any>> = styled(AppBar)`
`;

const NoneDecorationNavLink: React.FC<ReactRouterDom.NavLinkProps> = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`

const AppBarButton: React.FC<Mui.ButtonProps<any>> = styled(Button)`
  color: inherit;
`

export default function Header(): React.ReactElement<React.PropsWithChildren<void>> {

  const location: ReactRouterDom.Location = useLocation();

  return (
    <StyledAppBar position='relative'>
        <Container>
          <StyledToolbar color='inherit'>
            <Box>
              <AppBarButton size='large'>Shop</AppBarButton>
              <AppBarButton size='large' sx={{marginLeft: '10px'}}>Explore</AppBarButton>
            </Box>
            <Typography textTransform='uppercase'>shopname</Typography>
            { 
              ((): React.ReactElement<void> => {
                switch (location.pathname) {
                    case '/':
                      return <NoneDecorationNavLink to='/cart'><AppBarButton size='large'>my cart</AppBarButton></NoneDecorationNavLink>
                    case '/cart':
                      return <NoneDecorationNavLink to='/'><AppBarButton size='large'>back</AppBarButton></NoneDecorationNavLink>
                    default:
                      return <NoneDecorationNavLink to='/'><AppBarButton size='large'>home</AppBarButton></NoneDecorationNavLink>
                  } 
              })() 
            }
          </StyledToolbar>
        </Container>
    </StyledAppBar> 
  );
}
