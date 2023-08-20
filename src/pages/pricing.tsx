import SectionSubscribe from "@/components/Organisms/SectionSubscribe";
import {
    SectionHeroPricing ,
    SectionPricing,
    SectionFAQPricing,
    SectionContactPricing,
} from "@/components/Organisms/pricing-page";
import GeneralLayout from "@/components/Templates/GeneralLayout";
const PricingPage = () => {
    return (
        <>
            <GeneralLayout>
                <SectionHeroPricing />
                <SectionPricing />
                <SectionFAQPricing />
                <SectionContactPricing />
                <SectionSubscribe
                    title="We enable people to work where they want, when they want and how they want"
                    subtitle="We offer offices for lease by the day, by the week, or by the year. Choose from any of our 3000 locations. Get a free quote!"
                />
            </GeneralLayout>
        </>
    )
}

export default PricingPage;