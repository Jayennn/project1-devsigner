import Typography from "@/components/Atoms/Typography.tsx";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon.tsx";

const SectionCTAJoinAbout = () => {
    return <section className={"container"}>
        <div className={"flex flex-col lg:flex-row bg-themeLightBlue py-12 lg:py-20 gap-12 lg:gap-60 px-8 lg:px-12 rounded-xl"}>
            <Typography variant={"h2"} as={"h2"}>
                Join our team
            </Typography>
            <div className={"space-y-6"}>
                <Typography variant={"p"} as={"p"} className={"lg:max-w-xl"}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sapien eget eu elementum velit nunc
                    tortor pulvinar ornare at mi sed nisl in proin sollicitudin ultricies aliquet malesuada
                    aliquet.
                </Typography>
                <Typography
                    variant={'p'}
                    color={'blue'}
                    className={'flex items-center gap-2 font-extrabold'}
                >
                    Explore jobs
                    <ArrowRightIcon/>
                </Typography>
            </div>
        </div>
    </section>

}

export default SectionCTAJoinAbout;