import React from 'react';
import CourseList from '../components/CourseList';
import { Typography } from 'antd';

const { Title } = Typography;

const UserPage = () => {
  return (
    <div style={{ padding: 30 }}>
      <Title level={2}>User - View Courses</Title>
      <CourseList isAdmin={false} />
    </div>
  );
};

export default UserPage;
