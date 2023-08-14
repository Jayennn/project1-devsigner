import { ServiceCardPropsType } from '@/types/CustomPropsType.tsx'
import SectionService from '@/components/Organisms/SectionService.tsx'
import GeneralLayout from '@/components/Templates/GeneralLayout.tsx'
import {
    CoworkingSpacesIcon,
    HotDeskIcon,
    MeetingRoomIcon,
    StarterSpacesIcon,
    VirtualOfficeIcon,
} from '@/components/icons'

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

const HomePage = () => {
    return (
        <GeneralLayout>
            <main className={'min-h-screen'}>
                <SectionService
                    title={'Our Services'}
                    subtitle={
                        'Flexible Solutions for Your Business - Choose What Works Best for You'
                    }
                    services={services}
                />
            </main>
        </GeneralLayout>
    )
}

export default HomePage
