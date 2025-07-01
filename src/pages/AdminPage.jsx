import React, { useState, useEffect } from 'react';
import CourseList from '../components/CourseList';
import { Typography, Input, Button } from 'antd';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import { v4 as uuidv4 } from 'uuid';

const { Title } = Typography;

const AdminPage = () => {
  const { theme } = useTheme();
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('courses');
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState({ title: '', description: '', id: null });

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const handleSubmit = () => {
    if (!form.title || !form.description) return;
    if (form.id) {
      // update
      setCourses(courses.map(c => c.id === form.id ? form : c));
    } else {
      // create
      setCourses([...courses, { ...form, id: uuidv4() }]);
    }
    setForm({ title: '', description: '', id: null });
  };

  const handleEdit = (course) => {
    setForm(course);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'}`} style={{ padding: 30 }}>
      <Navbar />
      <Title level={2}>Admin - Manage Courses</Title>

      <Input
        placeholder="Course Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        style={{ marginBottom: 10 }}
      />
      <Input
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        style={{ marginBottom: 10 }}
      />
      <Button type="primary" onClick={handleSubmit}>
        {form.id ? 'Update Course' : 'Add Course'}
      </Button>

      <br /><br />
      <CourseList
        courses={courses}
        isAdmin={true}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default AdminPage;
