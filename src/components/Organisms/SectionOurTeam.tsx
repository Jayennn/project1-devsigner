import Typography from "@/components/Atoms/Typography.tsx";
import ItemTeamAbout from "@/components/Molecules/ItemTeamAbout.tsx";
import {SectionOurTeamPropType} from "@/types/CustomPropsType.tsx";


const SectionOurTeam = ({title, subtitle, description, teams}: SectionOurTeamPropType) => {
    return <section className={"container pb-24"}>
        {/*HEADING*/}
        <div className={"text-center"}>
            <Typography
                variant={'h5'}
                as={"h5"}
                color={'blue'}
                className={'font-semibold uppercase'}
            >
                {title}
            </Typography>
            <Typography
                variant={'h2'}
                as={"h2"}
                color={'primary'}
                className={
                    'mx-auto my-6 !text-[43px] !font-[700]  !leading-extraLoose'
                }
            >
                {subtitle}
            </Typography>
            <Typography
                variant={'h6'}
                as={"h6"}
                color={'secondary'}
                className={'mx-auto  max-w-4xl font-light'}
            >
                {description}
            </Typography>
        </div>

        {/*TEAMS*/}
        <div className={"grid grid-cols-1 lg:grid-cols-5 gap-16 mt-12"}>
            {
                teams.map((props) => <ItemTeamAbout {...props}/>)
            }
        </div>
    </section>
}


export default SectionOurTeam