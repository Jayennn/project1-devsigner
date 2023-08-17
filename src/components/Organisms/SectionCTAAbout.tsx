import imageUrl from '@/assets/hero/hero_cta_about.png'
import Typography from "@/components/Atoms/Typography.tsx";
import Button from "@/components/Atoms/Button.tsx";
const SectionCTAAbout = () => {
    return <section className={"container pt-24"}>
        <div className={"bg-themeLightBlue py-20 px-12 flex items-center justify-between rounded-xl"}>

            <div className={"ml-8"}>
                <Typography variant={"h2"} className={"max-w-lg !leading-snug"}>
                    We have all the amenities you need to grow your business starting on day one
                </Typography>
                <Typography variant={"h6"} color={"secondary"} className={"my-8 max-w-xl font-medium"}>
                    We strive to create a professional and welcoming environment in order to foster collaboration, creativity, and productivity.
                </Typography>
                <Button variant={"default"} className={"!py-6 text-lg"}>
                    Get Started
                </Button>
            </div>
            <div className={"mt-12"}>
                <img src={imageUrl} alt={"Image CTA About"} className={"h-[300px] w-[330px]"} />
            </div>

        </div>
    </section>
}

export default SectionCTAAbout;