import React from 'react';
import EventList from './EventList';
import AddEventForm from './AddEventForm';


const AllIn: React.FC = () => {
  
  return (
    <div>
      <AddEventForm />
      <EventList  />
    </div>
  );
};

export default AllIn;
