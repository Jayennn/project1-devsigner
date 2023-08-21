import Typography from "@/components/Atoms/Typography.tsx";
import ItemTeamAbout from "@/components/Molecules/ItemTeamAbout.tsx";
import {SectionOurTeamPropType} from "@/types/CustomPropsType.tsx";
import AnimatedText from "../Animation/AnimatedText";


const SectionOurTeam = ({title, subtitle, description, teams}: SectionOurTeamPropType) => {
    return <section className={"container pb-24"}>
        {/*HEADING*/}
        <div className={"text-center"}>
            <Typography
                variant={'h5'}
                as={"div"}
                color={'blue'}
                className={'font-semibold uppercase'}
            >
                <AnimatedText justify="center" word={title}/>
            </Typography>
            <Typography
                variant={'h2'}
                as={"div"}
                color={'primary'}
                className={
                    'mx-auto my-6'
                }
            >
                <AnimatedText justify="center" word={subtitle}/>
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
        <div className={"grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-16 mt-12 last:justify-self-center "}>
            {
                teams.map((props,index) => <ItemTeamAbout {...props} isLast={index+1 === teams.length}/>)
            }
        </div>
    </section>
}


export default SectionOurTeam