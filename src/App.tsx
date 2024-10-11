import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, Users, Ticket, MessageCircle, Search } from 'lucide-react'
import runningImage from './assets/running.jpg';

// Mock data for events
const events = [
  {
    id: 1,
    name: "Week 11 Run",
    date: "8th September, 2024",
    time: "7:00 AM",
    image: runningImage,
    description: "Bhag Club is India's speediest run club, with group runs every weekend across multiple locations.",
    community: "Bhag Club",
  },
  {
    id: 2,
    name: "Morning Fitness Run",
    date: "8th September, 2024",
    time: "7:00 AM",
    image: runningImage,
    description: "Fit Runners organizes energetic group runs every weekend for fitness enthusiasts.",
    community: "Fit Runners",
  },
  {
    id: 3,
    name: "Seaside Sprint",
    date: "8th September, 2024",
    time: "7:00 AM",
    image: runningImage,
    description: "RunXperience hosts fun weekend runs by the sea, perfect for an active start to your day.",
    community: "RunXperience",
  },
  {
    id: 4,
    name: "Weekend Power Run",
    date: "8th September, 2024",
    time: "7:00 AM",
    image: runningImage,
    description: "Weekend Warriors holds weekly running sessions to boost stamina and endurance.",
    community: "Weekend Warriors",
  },
  {
    id: 5,
    name: "Trailblazers Run",
    date: "8th September, 2024",
    time: "7:00 AM",
    image: runningImage,
    description: "Trailblazers Club arranges adventurous trail runs every Saturday for fitness seekers.",
    community: "Trailblazers Club",
  },
  {
    id: 6,
    name: "Hilltop Sprint",
    date: "8th September, 2024",
    time: "7:00 AM",
    image: runningImage,
    description: "Elevate Fitness organizes hill sprints to challenge your stamina and strength every weekend.",
    community: "Elevate Fitness",
  },
  {
    id: 7,
    name: "Parkside Run",
    date: "8th September, 2024",
    time: "7:00 AM",
    image: runningImage,
    description: "Park Runners group meets every weekend for scenic park runs with a community spirit.",
    community: "Park Runners",
  },
  {
    id: 8,
    name: "River Run Challenge",
    date: "8th September, 2024",
    time: "7:00 AM",
    image: runningImage,
    description: "River Runners Club hosts riverside runs to combine fitness and natural beauty every week.",
    community: "River Runners Club",
  },  
  // Add more events here...
]

export default function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-48 bg-white border-r p-4">
        <div className="mb-8">
          <img src="/jackpass-logo.svg" alt="jackpass" className="h-8 font-extrabold text-2xl" />
        </div>
        <nav>
          <a href="#" className="flex items-center text-blue-600 mb-4">
            <Ticket className="mr-2" />
            Events
          </a>
          <a href="#" className="flex items-center text-blue-600 mb-4">
            <Calendar className="mr-2" />
            Calendar
          </a>
          <a href="#" className="flex items-center text-blue-600 mb-4">
            <Users className="mr-2" />
            Communities
          </a>
          <a href="#" className="flex items-center text-blue-600 mb-4">
            <MessageCircle className="mr-2" />
            Broadcast
          </a>
          {/* Add other navigation items here */}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-scroll">
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-2/5">
            <Input
              type="search"
              placeholder="Search hobby, events, or community"
              className="w-full pr-10" // Add padding-right to leave space for the icon
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search // Replace with the actual Lucide icon component you're using
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <div className="flex items-center">
            <Button className="bg-blue-600 text-white mr-4">Create event</Button>
            <span className="mr-2">Popular in</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Delhi NCR" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delhi">Delhi NCR</SelectItem>
                <SelectItem value="gurgaon">Gurgaon</SelectItem>
                {/* Add more locations */}
              </SelectContent>
            </Select>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">Events</h1>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events
            .filter(event =>
              event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              event.community.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(event => (
              <div key={event.id} className="border rounded-lg overflow-hidden">
                <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="font-bold mb-2">{event.name}</h2>
                  <p className="text-sm text-gray-600 mb-2">{event.time} • {event.date}</p>
                  <p className="text-sm mb-2">{event.description}</p>
                  <div className="flex items-center">
                    <img src="/placeholder.svg" alt={event.community} className="w-6 h-6 rounded-full mr-2" />
                    <span className="text-sm">{event.community}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  )
}