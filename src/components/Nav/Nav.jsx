import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import { getIsLoggedIn } from '../../redux/auth/authSelector';
import s from './Nav.module.css';

export default function Nav() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div className={s.wrapper}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <nav className={s.nav}>
              {!isLoggedIn && (
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? s.activeLink : s.link
                  }
                >
                  Home
                </NavLink>
              )}

              {isLoggedIn && (
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? s.activeLink : s.link
                  }
                >
                  Contacts
                </NavLink>
              )}
            </nav>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
