import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import style from './Header.module.css';
import { logout, useAppDispatch, useAppMainSelector } from 'reduxEntities';

export const Header = () => {
  const authorized = useAppMainSelector(state => state.registration.authorized);
  const user = useAppMainSelector(state => state.registration.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div className={style.container}>
      {authorized ? (
        <div className={style.navLinks}>
          <h1>{user.name}</h1>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/history">History</NavLink>
          <button onClick={logoutHandler} className={style.btn}>
            Logout
          </button>
        </div>
      ) : (
        <div className={style.navLinks}>
          <NavLink to="/userInfo">Registration</NavLink>
          <NavLink to="/">Back</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </div>
  );
};
