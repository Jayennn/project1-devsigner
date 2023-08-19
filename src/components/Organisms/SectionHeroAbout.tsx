import  Typography  from '@/components/Atoms/Typography.tsx'
import imageUrl from "@/assets/hero/hero_company_about.png";
const SectionHeroAbout = () => {
    return (
        <section className={"bg-themeBlue py-12"}>
            <div className={"container"}>
                <div className={"w-full flex justify-between text-white pb-24"}>
                    <Typography variant={"h1"} className={"text-white max-w-xs"}>About our company</Typography>
                    <div className={"max-w-lg space-y-6"}>
                        <Typography variant={"h6"} className={"text-white font-light"}>Our space is more than a
                            shared office. It is a meeting ground for creatives and
                            teams</Typography>
                        <Typography variant={"h6"} className={"text-white font-light"}>
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
