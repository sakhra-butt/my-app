import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Form as AntForm, Input, Button } from 'antd';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addCourse, updateCourse } from '../features/coursesSlice';

const CourseForm = ({ selected, setSelected }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: selected ? selected.name : '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Course name is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (selected) {
      dispatch(updateCourse({ ...selected, name: values.name }));
    } else {
      dispatch(addCourse({ id: Date.now(), name: values.name }));
    }
    resetForm();
    setSelected(null);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <AntForm.Item
            validateStatus={touched.name && errors.name ? 'error' : ''}
            help={touched.name && errors.name}
          >
            <Field name="name" as={Input} placeholder="Course Name" />
          </AntForm.Item>

          <Button type="primary" htmlType="submit">
            {selected ? 'Update' : 'Add'} Course
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CourseForm;

