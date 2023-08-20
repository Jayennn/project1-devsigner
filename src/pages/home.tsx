import SectionService from '@/components/Organisms/SectionService.tsx'
import GeneralLayout from '@/components/Templates/GeneralLayout.tsx'
import SectionOfficeService from '@/components/Organisms/SectionOfficeService.tsx'
import SectionHeroHome from '@/components/Organisms/home-page/SectionHeroHome'
import SectionFeatureHome from '@/components/Organisms/home-page/SectionFeatureHome'
import SectionLocationHome from "@/components/Organisms/home-page/SectionLocationHome.tsx";
import SectionCTAHome from "@/components/Organisms/home-page/SectionCTAHome.tsx";
import SectionReview from '@/components/Organisms/SectionReview'
import { REVIEWS, SERVICE_OFFICES, SERVICES } from "@/types/data.tsx";


const HomePage = () => {
    const serviceProps = {
        title: "Our Services",
        subtitle: "Flexible Solutions for Your Business - Choose What Works Best for You",
        services: SERVICES
    }

    const officeServiceProps = {
        title: 'Why Serviced Office',
        subtitle: "We've helped thousands of fast-growing startups and teams",
        description: 'Grow without restriction. By giving you space that can be changed as your business grows. Only pay for the space you use with everything you need to be included in one price.',
        services: SERVICE_OFFICES
    }

    const reviewsProps = {
        Cards: REVIEWS
    }
    return (
        <GeneralLayout>
            <SectionHeroHome />
            <SectionService {...serviceProps} />
            <SectionFeatureHome />
            <SectionOfficeService {...officeServiceProps} />
            <SectionLocationHome />
            <SectionReview {...reviewsProps} />
            <SectionCTAHome />
        </GeneralLayout>
    )
}

export default HomePage
