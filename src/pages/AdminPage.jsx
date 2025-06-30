import React, { useState } from 'react';
import CourseList from '../components/CourseList';
import CourseForm from '../components/CourseForm';
import { Typography } from 'antd';

const { Title } = Typography;

const AdminPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: 30 }}>
      <Title level={2}>Admin - Manage Courses</Title>
      <CourseForm selected={selected} setSelected={setSelected} />
      <br />
      <CourseList isAdmin={true} onEdit={setSelected} />
    </div>
  );
};

export default AdminPage;
