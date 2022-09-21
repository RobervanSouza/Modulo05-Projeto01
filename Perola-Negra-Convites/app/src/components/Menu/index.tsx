import { Favorite } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import logo from 'assets/logo/logo.jpg';
import FavoriteScreen from 'pages/Favoritos/contexts/FavoriteScreen';
import { RoutePath } from 'types/routes';
import * as S from "./style";
import { NavItem } from './types';

interface MenuProps {
  active: RoutePath;
  navItems: NavItem[];
  onNavigate: (data: RoutePath) => void;
  onLogout: () => void;
}

const Menu = ({active, navItems, onNavigate, onLogout}: MenuProps) => {
  return (
    <header>
      <div>
        <S.Menu>
          <S.MenuLogo>
            <img src={logo} alt=" Logo" />
          </S.MenuLogo>
          {navItems.map((item, index) => (
            <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
              <S.MenuItemButton
                active={item.path === active}
                onClick={() => onNavigate(item.path)}
              >
                {item.icon}
              </S.MenuItemButton>
              
            </S.MenuItem>
          ))}
          <S.MenuItemLogout onClick={onLogout}>
            {" "}
            <Logout></Logout>
          </S.MenuItemLogout>
        
        </S.Menu>
      </div>
    </header>
  );
};

export default Menu;