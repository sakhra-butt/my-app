import React from 'react';
import { Switch, Button } from 'antd';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div
      className="themed-box"
      style={{
        padding: 10,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      {/* Switch on the left */}
      <div>
        <Switch
          checked={theme === 'dark'}
          onChange={toggleTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </div>

      {/* My App in the center */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          fontWeight: 'bold',
          fontSize: 18,
        }}
      >
        My App
      </div>

      {/* Logout on the right */}
      <div>
        <Button
          type="primary"
          onClick={handleLogout}
          style={{ backgroundColor: '#1677ff', borderColor: '#1677ff' }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
