import React from 'react';
import { List, Button, Card } from 'antd';

const CourseList = ({ courses, isAdmin, onEdit, onDelete }) => {
  return (
    <List
      dataSource={courses}
      renderItem={(course) => (
        <List.Item>
          <Card title={course.title}>
            <p>{course.description}</p>
            {isAdmin && (
              <>
                <Button onClick={() => onEdit(course)} style={{ marginRight: 8 }}>
                  Edit
                </Button>
                <Button danger onClick={() => onDelete(course.id)}>Delete</Button>
              </>
            )}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default CourseList;
