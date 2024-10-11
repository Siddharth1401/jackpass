import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Event {
  id: number;
  name: string;
  category: string;
  community: string;
  location: string;
  date: string;
  attendees: number;
}

interface EventsState {
  events: Event[];
  filteredEvents: Event[];
  searchQuery: string;
}

const initialState: EventsState = {
  events: [], // Initially mock data, later from API
  filteredEvents: [],
  searchQuery: '',
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<Event[]>) => {
      state.events = action.payload;
      state.filteredEvents = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredEvents = state.events.filter(event =>
        event.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    // Add more reducers like filtering by category or location
  },
});

export const { setEvents, setSearchQuery } = eventsSlice.actions;
export default eventsSlice.reducer;
