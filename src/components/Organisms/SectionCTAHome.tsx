import {Card} from "@/components/Atoms/Card.tsx";
import {Typography} from "@/components/Atoms/Typography.tsx";
import Button from "@/components/Atoms/Button.tsx";
import imageUrl from "@/assets/card/card_cta_home.jpg"
import {PlayIcon} from "@/components/icons";

const SectionCTAHome = () => {
    return <section className={"container py-24"}>
        <Card
            className={"bg-themeLightBlue w-full pl-24 py-11 pr-12 flex justify-between gap-4 !shadow-none !border-0 rounded-2xl"}>
            <div className={"space-y-6 mt-4"}>
                <Typography variant={"h2"} className={"max-w-lg !leading-relaxed font-extrabold"}>Customised workspace
                    for rent wherever you need it</Typography>
                <Button className={"!py-6 text-lg"}>Book Tour</Button>
            </div>
            <div className={"relative"}>
                <img src={imageUrl} className={"w-[350px] rounded-2xl"} alt={"CTA Card Home"}/>
                <div className={"absolute bg-themeMediumBlue top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-5 flex items-center text-center"}>
                    <PlayIcon  />
                </div>
            </div>

        </Card>


    </section>;
}

export default SectionCTAHome