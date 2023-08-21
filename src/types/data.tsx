import {
   FAQPropsType,
   ItemTeamPropsType,
   LocationCardPropsType,
   ReviewCardPropsType,
   ServiceCardPropsType,
   ServiceOfficeCardPropsType
} from "@/types/CustomPropsType.tsx";
import {
   CoworkingSpacesIcon,
   HotDeskIcon,
   LearnMoreIcon,
   MeetingRoomIcon,
   SmallLocationIcon,
   StarterSpacesIcon,
   VirtualOfficeIcon
} from "@/components/icons";
import officeUrl from "@/assets/card/Office.png";
import coworkingUrl from "@/assets/card/coworking_space.png";
import meetingUrl from "@/assets/card/meeting_space.png";

import gibbs from "@/assets/review-avatar/gibbs.png";
import brittany from "@/assets/review-avatar/brittany.png";
import randal from "@/assets/review-avatar/randal.png";
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

export const REVIEWS: ReviewCardPropsType[] = [
   {
      description: "Lorem ipsum dolor sit amet consectetur non adipiscing elit gravida posuere odio metus adipiscing tincidunt venenatis amet sagittis tellus porttitor enim blandit venenatis tellus.",
      name: "Randall Robertson",
      role: "Project lead at Zoole",
      imageUrl: randal
   },
   {
      description: "Futurspace is an excellent coworking space for my agency. It’s a great place to meet other business. owners expectations",
      name: "Del Gibbs",
      role: "VP, Globee Softech",
      imageUrl: gibbs
   },
   {
      description: "Quisque consectetur vulputate odio, non dictum metus porttitor molestie. Duis pharetra suscipit dolor, quis euismod velit fringilla sed.",
      name: "Brittany",
      role: "Co-Founder & CTO - Payfi",
      imageUrl: brittany
   },
   {
      description: "Lorem ipsum dolor sit amet consectetur non adipiscing elit gravida posuere odio metus adipiscing tincidunt venenatis amet sagittis tellus porttitor enim blandit venenatis tellus.",
      name: "Randall Robertson",
      role: "Project lead at Zoole",
      imageUrl: randal
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

export const LOCATION_CARDS: LocationCardPropsType[] = [
   {
      title: "Global Locations",
      description: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      link: "All locations",
      icon: <LearnMoreIcon/>
   },
   {
      title: "Call Us Now",
      description: "(252) 555-0126 \n (808) 555-0111",
      link: "Learn more",
      icon: <LearnMoreIcon/>
   },
   {
      title: "Customer Service",
      description: "Our friendly team is here to help.",
      link: "Email us",
      icon: <SmallLocationIcon/>
   }
]

export const FAQ_PRICING: FAQPropsType[] = [
   {
      title: "What are the benefits of joining the Futurspace network?",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare"
   },
   {
      title: "What should I expect from the screening process?",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare"
   },
   {
      title: "Is Telephone service available?",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare"
   },
   {
      title: "Is the money refundable if I am unable to register?",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit elementum velit nunc tortor pulvinar ornare"
   }
]