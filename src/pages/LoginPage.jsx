// src/pages/LoginPage.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Typography, Form as AntForm, message } from 'antd';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    // Simple static login logic (in real apps, validate with backend)
    const { email, password } = values;

    if (email === 'admin@example.com' && password === 'admin123') {
      dispatch(login({ email, role: 'admin' }));
      navigate('/admin');
    } else if (email === 'user@example.com' && password === 'user123') {
      dispatch(login({ email, role: 'user' }));
      navigate('/user');
    } else {
      message.error('Invalid credentials');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto' }}>
      <Title level={2}>Login</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
            <AntForm.Item
              validateStatus={touched.email && errors.email ? 'error' : ''}
              help={touched.email && errors.email ? errors.email : ''}
            >
              <Input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </AntForm.Item>

            <AntForm.Item
              validateStatus={touched.password && errors.password ? 'error' : ''}
              help={touched.password && errors.password ? errors.password : ''}
            >
              <Input.Password
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </AntForm.Item>

            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
