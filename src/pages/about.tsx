import SectionOfficeService from "@/components/Organisms/SectionOfficeService.tsx";
import SectionOurTeam from "@/components/Organisms/SectionOurTeam.tsx";
import SectionPartner from "@/components/Organisms/SectionPartner.tsx";
import SectionSubscribe from "@/components/Organisms/SectionSubscribe.tsx";
import SectionCTAAbout from "@/components/Organisms/SectionCTAAbout.tsx";
import AboutLayout from "@/components/Templates/AboutLayout.tsx";
import {SERVICE_OFFICES, TEAMS} from "@/types/data.tsx";
import SectionHeroAbout from "@/components/Organisms/SectionHeroAbout.tsx";
import SectionDataAbout from "@/components/Organisms/SectionDataAbout.tsx";
import SectionCTAJoinAbout from "@/components/Organisms/SectionCTAJoinAbout.tsx";

const AboutPage = () => {
    const officeProps = {
        title: "Why Serviced Office",
        subtitle: "We've helped thousands of fast-growing startups and teams",
        description: "Grow without restriction. By giving you space that can be changed as your business grows. Only pay for the space you use with everything you need to be included in one price.",
        services: SERVICE_OFFICES
    }

    const ourTeamProps = {
        title: "Our Leadership team",
        subtitle: "Meet the great team behind Futurspace",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sapien vestibulum quam massa viverra blandit sit auctor vestibulum semper viverra aliquet sit.",
        teams: TEAMS
    }

    const partnerProps = {
        title: "Trusted by top companies and startups around the world"
    }

    const subscribeProps = {
        title: "Modern workspaces that fits your needs",
        subtitle: "No subscriptions or lousy monthly fees. Only pay for the space and time you need"
    }
    return (
        <AboutLayout>
            <SectionHeroAbout />
            <SectionDataAbout />
            <SectionOfficeService {...officeProps} />
            <SectionOurTeam {...ourTeamProps} />
            <SectionCTAJoinAbout />
            <SectionPartner {...partnerProps} />
            <SectionCTAAbout />
            <SectionSubscribe {...subscribeProps} />
        </AboutLayout>

    )
}


export default AboutPage