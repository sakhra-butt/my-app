
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    message.info('You have been logged out');
    navigate('/login');
  };

  return (
    <nav>
      <Button onClick={handleLogout}>Logout</Button>
    </nav>
  );
};

export default Navbar;
