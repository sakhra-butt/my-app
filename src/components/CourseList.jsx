import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, List } from 'antd';
import { deleteCourse } from '../features/coursesSlice';

const CourseList = ({ onEdit, isAdmin }) => {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  return (
    <List
      bordered
      dataSource={courses}
      renderItem={(item) => (
        <List.Item
          actions={
            isAdmin
              ? [
                  <Button onClick={() => onEdit(item)}>Edit</Button>,
                  <Button danger onClick={() => dispatch(deleteCourse(item.id))}>
                    Delete
                  </Button>,
                ]
              : []
          }
        >
          {item.name}
        </List.Item>
      )}
    />
  );
};

export default CourseList;
