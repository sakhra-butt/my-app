import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import CourseList from '../components/CourseList';

const { Title } = Typography;

const UserPage = () => {
  const { theme } = useTheme();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('courses');
    if (saved) {
      setCourses(JSON.parse(saved));
    }
  }, []);

  return (
    <div className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} style={{ padding: 30 }}>
      <Navbar />
      <Title level={2}>User - View Courses</Title>
      <CourseList courses={courses} isAdmin={false} />
    </div>
  );
};

export default UserPage;
