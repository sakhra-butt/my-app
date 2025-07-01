import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Switch from 'react-switch';

const { Title } = Typography;

const credentials = {
  admin: { email: 'admin@example.com', password: 'admin123' },
  user: { email: 'user@example.com', password: 'user123' },
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const role = new URLSearchParams(location.search).get('role');
  const [selectedRole, setSelectedRole] = useState(role);

  const handleLogin = (values) => {
    const { email, password } = values;
    const valid = credentials[selectedRole];

    if (valid && email === valid.email && password === valid.password) {
      dispatch(login({ email, role: selectedRole }));
      navigate(selectedRole === 'admin' ? '/admin' : '/user');
    } else {
      message.error('Invalid credentials');
    }
  };

  const handleSelect = (role) => {
    setSelectedRole(role);
    navigate(`/login?role=${role}`);
  };

  return (
    <div className={`login-page ${theme}-theme`} style={{ padding: 40, maxWidth: 400, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <strong style={{ fontSize: 20 }}>My App</strong>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: 8 }}>{theme === 'dark' ? 'Dark' : 'Light'}</label>
          <Switch onChange={toggleTheme} checked={theme === 'dark'} />
        </div>
      </div>

      {!selectedRole ? (
        <>
      
  <Title level={3}>Login as</Title>

<Button
  type="default"
  block
  className="role-button"
  style={{ marginBottom: 16 }}
  onClick={() => handleSelect('admin')}
>
  Admin
</Button>

<Button
  type="default"
  block
  className="role-button"
  onClick={() => handleSelect('user')}
>
  User
</Button>


        </>
      ) : (
        <>
          <Title level={3}>Login as {selectedRole}</Title>
          <Form layout="vertical" onFinish={handleLogin}>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Email is required' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Password is required' }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item>
            <Button type="primary" htmlType="submit" block className="login-btn">
  Login
</Button>

            </Form.Item>
          </Form>
        </>
      )}
    </div>
  );
};

export default LoginPage;
