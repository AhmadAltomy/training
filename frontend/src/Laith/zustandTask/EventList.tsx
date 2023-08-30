/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { useEventStore } from '../store/eventStore';
import { Link } from 'react-router-dom';

const EventList: React.FC = () => {
  const events = useEventStore((state) => state.events);
  const deleteEvent = useEventStore((state) => state.deleteEvent);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editingEventId, setEditingEventId] = useState<number | null>(null);

  const handleEditClick = (eventId: number) => {
    setEditingEventId(eventId);
    setEditModalVisible(true);
  };

  const handleDeleteClick = (eventId: number) => {
    Modal.confirm({
      title: 'Delete Event',
      content: 'Are you sure you want to delete this event?',
      onOk: () => deleteEvent(eventId),
    });
  };

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Time', dataIndex: 'time', key: 'time' },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (_: any, record: { id: number; }) => (
        <div>
          <Link to={`/zustand/edit/${record.id}`}>
            <Button onClick={() => handleEditClick(record.id)}>Edit</Button>
          </Link>
          <Button onClick={() => handleDeleteClick(record.id)}>Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      dataSource={events}
      columns={columns}
      rowKey="id"
      pagination={false}
    />
  );
};

export default EventList;
