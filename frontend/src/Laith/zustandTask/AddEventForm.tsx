/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { useEventStore } from '../store/eventStore';

const AddEventForm: React.FC = () => {
  const addEvent = useEventStore((state) => state.addEvent);

  const onFinish = (values: any) => {
    const newEvent = {
      id: Date.now(),
      ...values,
    };
    addEvent(newEvent);
    Modal.success({ content: 'Event added successfully!' });
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item label="Title" name="title">
        <Input />
      </Form.Item>
      <Form.Item label="Date" name="date">
        <Input />
      </Form.Item>
      <Form.Item label="Time" name="time">
        <Input />
      </Form.Item>
      <Form.Item label="Type" name="type">
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Event
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddEventForm;
