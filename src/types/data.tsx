import {
   ItemTeamPropsType,
   ReviewCardPropsType,
   ServiceCardPropsType,
   ServiceOfficeCardPropsType
} from "@/types/CustomPropsType.tsx";
import {
   CoworkingSpacesIcon,
   HotDeskIcon,
   MeetingRoomIcon,
   StarterSpacesIcon,
   VirtualOfficeIcon
} from "@/components/icons";
import officeUrl from "@/assets/card/Office.png";
import coworkingUrl from "@/assets/card/coworking_space.png";
import meetingUrl from "@/assets/card/meeting_space.png";

import person from "@/assets/review-avatar/person1.png";
import andyUrl from "@/assets/team/andy.jpg";
import johnUrl from "@/assets/team/john.jpg";
import mattUrl from "@/assets/team/matt.jpg";
import samUrl from "@/assets/team/sam.jpg";
import sophiaUrl from "@/assets/team/sophia.jpg";


export const SILVER_PLANS = [
   {
      text: "Coworking & Rooms", 
      status: true
   },
   {
      text: "High-speed Internet",
      status: true
   },
   {
      text: "Explusive Workspace",
      status: false,
   },
   {
      text: "Customisable Room",
      status: false
   }, 
   {
      text: "All-inclusive Pricing",
      status: false
   }
]

export const GOLD_PLANS = [
   {
      text: "Coworking & Rooms", 
      status: true
   },
   {
      text: "High-speed Internet",
      status: true
   },
   {
      text: "Explusive Workspace",
      status: true,
   },
   {
      text: "Customisable Room",
      status: true
   }, 
   {
      text: "Meeting Rooms",
      status: true
   },
   {
      text: "Private Office",
      status: true
   },
   {
      text: "All-inclusive Pricing",
      status: false
   }
]

export const SERVICES: ServiceCardPropsType[] = [
   {
      title: 'Hot Desks',
      subtitle: 'Ideal for members who need a productive space to work.',
      icon: <HotDeskIcon />,
   },
   {
      title: 'Starter Spaces',
      subtitle: 'Ideal for members who need a productive space to work.',
      icon: <StarterSpacesIcon />,
      isBordered: true,
   },
   {
      title: 'Coworking Spaces',
      subtitle: 'Ideal for members who need a productive space to work.',
      icon: <CoworkingSpacesIcon />,
   },
   {
      title: 'Virtual Office',
      subtitle: 'Ideal for members who need a productive space to work.',
      icon: <VirtualOfficeIcon />,
   },
   {
      title: 'Meeting Room',
      subtitle: 'Ideal for members who need a productive space to work.',
      icon: <MeetingRoomIcon />,
   },
]

export const SERVICE_OFFICES: ServiceOfficeCardPropsType[] = [
   {
      title: 'Office Space',
      subtitle:
          'Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.',
      imageUrl: officeUrl,
   },
   {
      title: 'Starter Space',
      subtitle:
          'Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.',
      imageUrl: meetingUrl,
   },
   {
      title: 'Coworking Space',
      subtitle:
          'Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.',
      imageUrl: coworkingUrl,
   },
]

export  const REVIEWS: ReviewCardPropsType[] = [
   {
      description: "Futurspace is an excellent coworking space for my agency. It’s a great place to meet other business. owners expectations",
      name: "Del Gibbs",
      role: "VP, Globee Softech",
      imageUrl: person
   },
   {
      description: "Quisque consectetur vulputate odio, non dictum metus porttitor molestie. Duis pharetra suscipit dolor, quis euismod velit fringilla sed.",
      name: "Brittany",
      role: "Co-Founder & CTO - Payfi",
      imageUrl: person
   },
   {
      description: "Lorem ipsum dolor sit amet consectetur non adipiscing elit gravida posuere odio metus adipiscing tincidunt venenatis amet sagittis tellus porttitor enim blandit venenatis tellus.",
      name: "Randall Robertson",
      role: "Project lead at Zoole",
      imageUrl: person
   },
]

export const TEAMS: ItemTeamPropsType[] = [
   {
      name:"John Carter",
      position:"CEO & Founder",
      imageUrl:johnUrl
   },
   {
      name:"Sophie Moore",
      position:"CTO & Founder",
      imageUrl:sophiaUrl
   },
   {
      name:"Matt Cannon",
      position:"VP of Finance",
      imageUrl:mattUrl
   },
   {
      name:"Andy Smith",
      position:"VP of Design",
      imageUrl:andyUrl
   },
   {
      name:"Sam Houston",
      position:"VP of Product",
      imageUrl:samUrl
   },
]
