import AnimatedText from '@/components/Animation/AnimatedText';
import  Typography  from '@/components/Atoms/Typography.tsx'
import ItemDataAbout from "@/components/Molecules/ItemDataAbout.tsx";

const SectionDataAbout = () => {
    return (
        <section className={"container pt-24"}>
            <Typography variant={"h2"} as={"div"} className={"!leading-snug"}>
                <AnimatedText word='Our space is more than a shared office. It is a meeting ground for creatives and teams'/>
            </Typography>
            <Typography variant={"p"} as={"p"} className={"mt-4"} color={"secondary"}>
                Find focus and clarity space to do the things you need to do to grow your business in New York. Book
                by the month, daily or by the hour.
            </Typography>
            <hr className={"my-12"}/>

            <div className={"grid grid-cols-1 md:grid-cols-3 my-12 gap-16"}>
                <ItemDataAbout title={3000}
                      subtitle={"Happy Members"}
                      description={"We offer offices for lease by the day, by the week, or by the year."}
                />
                <ItemDataAbout title={12}
                      subtitle={"Locations across the globe"}
                      description={"We offer offices for lease by the day, by the week, or by the year."}
                />
                <ItemDataAbout title={10}
                      subtitle={"Years of service"}
                      description={"We offer offices for lease by the day, by the week, or by the year."}
                />

            </div>


        </section>
    )
}

export default SectionDataAbout
