import {
    ReviewCardPropsType,
    ServiceCardPropsType,
    ServiceOfficeCardPropsType,
} from '@/types/CustomPropsType.tsx'
import SectionService from '@/components/Organisms/SectionService.tsx'
import GeneralLayout from '@/components/Templates/GeneralLayout.tsx'
import {
    CoworkingSpacesIcon,
    HotDeskIcon,
    MeetingRoomIcon,
    StarterSpacesIcon,
    VirtualOfficeIcon,
} from '@/components/icons'
import SectionOfficeService from '@/components/Organisms/SectionOfficeService.tsx'
import image from '@/assets/card/Office.png'
import SectionHeroHome from '@/components/Organisms/SectionHeroHome.tsx'
import SectionFeatureHome from '@/components/Organisms/SectionFeatureHome.tsx'
import SectionLocationHome from "@/components/Organisms/SectionLocationHome.tsx";
import SectionCTAHome from "@/components/Organisms/SectionCTAHome.tsx";
import SectionReview from '@/components/Organisms/SectionReview'
import person from "@/assets/review-avatar/person1.png";

const services: ServiceCardPropsType[] = [
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

const serviceOffices: ServiceOfficeCardPropsType[] = [
    {
        title: 'Office Space',
        subtitle:
            'Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.',
        imageUrl: image,
    },
    {
        title: 'Office Space',
        subtitle:
            'Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.',
        imageUrl: image,
    },
    {
        title: 'Office Space',
        subtitle:
            'Informal drop-in meeting spaces with secure WiFi, access to a printer, scanner and photocopier.',
        imageUrl: image,
    },
]

const ReviewCards: ReviewCardPropsType[] = [
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

const HomePage = () => {
    return (
        <GeneralLayout>
            <main className={'bg-[#F1F1F1, #F1F1F100] min-h-screen'}>
                <SectionHeroHome />
                <SectionService
                    title={'Our Services'}
                    subtitle={
                        'Flexible Solutions for Your Business - Choose What Works Best for You'
                    }
                    services={services}
                />
                <SectionFeatureHome />
                <SectionOfficeService
                    title={'Why Serviced Office'}
                    subtitle={
                        "We've helped thousands of\n" +
                        'fast-growing startups and teams'
                    }
                    description={
                        'Grow without restriction. By giving you space that can be changed as your business grows. Only pay for the space you use with everything you need to be included in one price.'
                    }
                    services={serviceOffices}
                />
                <SectionLocationHome />
                <SectionCTAHome />
                <SectionReview Cards={ReviewCards}/>
            </main>
        </GeneralLayout>
    )
}

export default HomePage
