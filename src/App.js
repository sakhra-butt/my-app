import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/admin"
          element={user?.role === 'admin' ? <AdminPage /> : <Navigate to="/" />}
        />
        <Route
          path="/user"
          element={user?.role === 'user' ? <UserPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
