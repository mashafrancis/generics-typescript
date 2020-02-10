import {MeetingResource} from "./meetingResource";

export class ConferenceRoom implements MeetingResource {
  name: string;
  capacity: number;
  hasProjector: boolean;
  location: string;
}

export const conferenceRoomData: ConferenceRoom[] = [
  {name: 'Cheerios', capacity: 15, hasProjector: false, location: 'HQ'},
  {
    name: 'Fruit Loops',
    capacity: 25,
    hasProjector: true,
    location: 'East Campus'
  },
  {
    name: 'Wheaties',
    capacity: 40,
    hasProjector: true,
    location: 'West Campus'
  },
  {name: 'Cher', capacity: 10, hasProjector: false, location: 'HQ'}
];
