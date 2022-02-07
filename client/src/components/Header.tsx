import React, {MouseEventHandler, useState} from 'react';
import Mui, {
  Box,
  Button, 
  styled, 
  AppBar,
  Typography,
  Toolbar,
  Container,
  Menu,
  MenuItem
} from '@mui/material';
import ReactRouterDom, { 
  NavLink, 
  useLocation 
} from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';

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

const AccountWrap: React.FC<Mui.BoxProps<any>> = styled(Box)`
  display: flex;
  color: inherit;
  align-items: center;
`

export default function Header(): React.ReactElement<React.PropsWithChildren<void>> {

  const location: ReactRouterDom.Location = useLocation();
  const [anchorEl, setAnchorEl] = useState<any>(null);

  function handleClick(e: any): void {
    setAnchorEl(e.currentTarget);
  }
  function handleClose(e: MouseEvent): void {
    setAnchorEl(null);
  }

  return (
    <StyledAppBar position='relative'>
        <Container>
          <StyledToolbar color='inherit'>
            <Box>
              <AppBarButton size='large'>Shop</AppBarButton>
              <AppBarButton size='large' sx={{marginLeft: '10px'}}>Explore</AppBarButton>
            </Box>
            <Typography textTransform='uppercase'>shopname</Typography>
            <AccountWrap>
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
              <Button color='inherit' onClick={handleClick}>
                <AccountBoxIcon fontSize='large'/>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem><AccountCircleIcon sx={{paddingRight: '5px'}} />Profile</MenuItem>
                <MenuItem><SettingsIcon sx={{paddingRight: '5px'}}/>Settings</MenuItem>
                <MenuItem><CloseIcon sx={{paddingRight: '5px'}}/>Log out</MenuItem>
              </Menu>
            </AccountWrap>
          </StyledToolbar>
        </Container>
    </StyledAppBar> 
  );
}
