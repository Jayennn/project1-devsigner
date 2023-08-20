import GeneralLayout from "@/components/Templates/GeneralLayout";
import {
    SectionHeroSpace,
    SectionCTASpace,
    SectionFeedbackSpace
} from "@/components/Organisms/space-page"
import SectionReview from "@/components/Organisms/SectionReview";
import SectionPartner from "@/components/Organisms/SectionPartner";
import { REVIEWS, SERVICE_OFFICES } from "@/types/data";
import SectionOfficeService from "@/components/Organisms/SectionOfficeService";

const officeServiceProps = {
    subtitle: "We've helped thousands of fast-growing startups and teams",
    description: "Grow without restriction. By giving you space that can be changed as your business grows. Only pay for the space you use with everything you need to be included in one price.",
    services: SERVICE_OFFICES
}

const SpacePage = () => {
    return (
        <>
            <GeneralLayout>
                <SectionHeroSpace />
                <SectionOfficeService {...officeServiceProps} />
                <SectionCTASpace />
                <SectionReview Cards={REVIEWS}/>
                <SectionFeedbackSpace />
                <SectionPartner title="Trusted by top companies and startups around the world"/>
            </GeneralLayout>
        </>
    )
}

export default SpacePage;