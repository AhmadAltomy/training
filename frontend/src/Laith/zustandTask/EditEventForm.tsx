/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import { Form, Input, Button, Space } from "antd";
import { useEventStore } from "../store/eventStore";
import { Link } from "react-router-dom";

const EditEventForm: React.FC = () => {
  const { eventId } = useParams();
  const event = useEventStore((state) =>
    state.events.find((e) => e.id === Number(eventId))
  );

  const editEvent = useEventStore((state) => state.editEvent);

  const onFinishEdit = (values: any) => {
    const editedEvent = {
      ...event,
      ...values,
    };
    editEvent(Number(eventId), editedEvent);
  };

  return (
    <Form initialValues={event} onFinish={onFinishEdit}>
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
      <Space wrap>
        <Button type="primary" htmlType="submit" >
          Save Changes
        </Button>
        <Link to="/zustand" >
          <Button danger >Back</Button>
        </Link>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default EditEventForm;
