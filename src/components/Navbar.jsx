import React from 'react';
import { Switch } from 'antd';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div style={{ padding: 16, display: 'flex', justifyContent: 'space-between' }}>
      <h2 style={{ color: darkMode ? '#fff' : '#000' }}>Course Dashboard</h2>
      <Switch
        checked={darkMode}
        onChange={toggleTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
    </div>
  );
};

export default Navbar;
