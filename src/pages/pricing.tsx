import {
    SectionHeroPricing as Hero,
    SectionPricing as Pricing,
    SectionFAQPricing as FAQ,
    SectionContactPricing as Contact,
    SectionSubscribePricing as Subcribe
} from "@/components/Organisms/pricing-page";
import GeneralLayout from "@/components/Templates/GeneralLayout";
const PricingPage = () => {
    return (
        <>
            <GeneralLayout>
                <Hero />
                <Pricing />
                <FAQ />
                <Contact />
                <Subcribe/>
            </GeneralLayout>
        </>
    )
}

export default PricingPage;