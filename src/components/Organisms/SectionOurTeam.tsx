import Typography from "@/components/Atoms/Typography.tsx";
import imageUrl from "@/assets/team/matt.jpg"

type OurTeamPropType = {
    title: string;
    subtitle: string
    description: string
}
const SectionOurTeam = ({title, subtitle, description}: OurTeamPropType) => {
    return <section className={"container py-24"}>
        <div className={"text-center"}>
            <Typography
                variant={'h4'}
                color={'blue'}
                className={'font-semibold uppercase'}
            >
                {title}
            </Typography>
            <Typography
                variant={'h2'}
                color={'primary'}
                className={
                    'mx-auto my-6 !text-[43px] !font-[700]  !leading-extraLoose'
                }
            >
                {subtitle}
            </Typography>
            <Typography
                variant={'h6'}
                color={'secondary'}
                className={'mx-auto  max-w-4xl font-medium'}
            >
                {description}
            </Typography>
        </div>

        <div className={"grid grid-cols-1 lg:grid-cols-5 gap-16 mt-12"}>
            <ItemTeam />
            <ItemTeam />
            <ItemTeam />
            <ItemTeam />
            <ItemTeam />
        </div>


    </section>
}

const ItemTeam = () =>   <div className={"text-center"}>
    <img src={imageUrl} alt={"Team Image"} className={"rounded-xl"} />
    <Typography variant={"h5"} className={"my-4"} >
        John Carter
    </Typography>
    <Typography variant={"p"}>
        CEO & Founder
    </Typography>
</div>



export default SectionOurTeam