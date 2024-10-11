// import { useParams } from 'react-router-dom';

const EventDetails = () => {
//   const { eventId } = useParams();

  // In a real app, you would fetch the event data by ID here
  const mockEvent = {
    name: 'Delhi Run - Week 11',
    category: 'Running',
    community: 'Bhag Club',
    location: 'Nehru Park, Delhi',
    date: '10th October',
    description: 'Join us for an active and fun-filled run...',
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{mockEvent.name}</h2>
      <p>{mockEvent.description}</p>
      <p>Location: {mockEvent.location}</p>
      <p>Date: {mockEvent.date}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">RSVP</button>
    </div>
  );
};

export default EventDetails;
