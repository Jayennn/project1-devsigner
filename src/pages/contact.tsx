import GeneralLayout from "@/components/Templates/GeneralLayout"
import {
    SectionHeroContact, 
    SectionMapContact,
    SectionCTAContact,
    SectionFeedBackContact
} from "@/components/Organisms/contact-page"
import SectionPartner from "@/components/Organisms/SectionPartner"
const ContactPage = () => {
    return (
        <>
            <GeneralLayout>
                <SectionHeroContact />
                <SectionMapContact />
                <SectionCTAContact />
                <SectionPartner title="Trusted by top companies and startups around the world" />
                <SectionFeedBackContact/>
            </GeneralLayout>
        </>
    )
}

export default ContactPage