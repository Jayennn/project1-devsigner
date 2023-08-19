import Typography from "@/components/Atoms/Typography.tsx";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon.tsx";

const SectionCTAJoinAbout = () => {
    return <section className={"container"}>
        <div className={"flex bg-themeLightBlue py-20 gap-60 px-12 rounded-xl"}>
            <Typography variant={"h2"} as={"h2"}>
                Join our team
            </Typography>
            <div className={"space-y-6"}>
                <Typography variant={"p"} className={"max-w-xl"}>
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