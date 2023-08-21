import  Typography  from '@/components/Atoms/Typography.tsx'
import imageUrl from "@/assets/hero/hero_company_about.png";
import AnimatedText from '@/components/Animation/AnimatedText';
const SectionHeroAbout = () => {
    return (
        <section className={"bg-themeBlue pb-24 md:pb-12 py-12"}>
            <div className={"container"}>
                <div className={"w-full flex flex-col lg:flex-row justify-between text-white pb-24"}>
                    <Typography variant={"h1"} as={"div"} className={"text-white mx-auto md:mx-0 md:max-w-xs text-center md:text-left"}>
                        <AnimatedText word='About our company'/>
                    </Typography>
                    <div className={"max-w-lg space-y-6 text-center md:text-left mt-8 lg:mt-0"}>
                        <Typography variant={"h6"} as={"h6"} className={"text-white font-light"}>Our space is more than a
                            shared office. It is a meeting ground for creatives and
                            teams</Typography>
                        <Typography variant={"h6"} as={"h6"} className={"text-white font-light"}>
                            Find focus and clarity space to do the things you need to do to grow your business in
                            New York. Book by the month, daily or by the hour.
                        </Typography>
                    </div>
                </div>
                <div>
                    <img src={imageUrl} alt={"Gambar About Company"}/>
                </div>
            </div>

        </section>
    )
}

export default SectionHeroAbout
