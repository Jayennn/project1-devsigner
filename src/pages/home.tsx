import {
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
            </main>
        </GeneralLayout>
    )
}

export default HomePage
