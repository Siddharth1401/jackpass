import React from 'react';

interface EventCardProps {
  name: string;
  category: string;
  community: string;
  location: string;
  date: string;
  attendees: number;
}

const EventCard: React.FC<EventCardProps> = ({ name, category, community, location, date, attendees }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{category}</p>
      <p>{community}</p>
      <p>{location}</p>
      <p>{date}</p>
      <p>{attendees} attending</p>
    </div>
  );
};

export default EventCard;
