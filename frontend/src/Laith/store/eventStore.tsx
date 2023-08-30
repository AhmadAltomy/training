import create from 'zustand';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  description?: string;
}

interface EventStore {
  events: Event[];
  addEvent: (event: Event) => void;
  editEvent: (id: number, event: Event) => void;
  deleteEvent: (id: number) => void;
}

export const useEventStore = create<EventStore>((set) => ({
  events: [],
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  editEvent: (id, event) =>
    set((state) => ({
      events: state.events.map((e) => (e.id === id ? event : e)),
    })),
  deleteEvent: (id) =>
    set((state) => ({
      events: state.events.filter((e) => e.id !== id),
    })),
}));
