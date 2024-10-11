import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEvents } from '../features/eventsSlice';
import { RootState } from '../store';
import EventCard from '../components/EventCard';
import SearchBar from '../components/SearchBar';

const ExploreEvents = () => {
  const dispatch = useDispatch();
  const { filteredEvents } = useSelector((state: RootState) => state.events);

  // Load mock data on component mount
  useEffect(() => {
    const mockEvents = [
      // Add mock event objects
      { id: 1, name: 'Delhi Run', category: 'Running', community: 'Bhag Club', location: 'Delhi', date: '8th Sept', attendees: 200 },
      // More mock events...
    ];
    dispatch(setEvents(mockEvents));
  }, [dispatch]);

  return (
    <div className="p-6">
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default ExploreEvents;
