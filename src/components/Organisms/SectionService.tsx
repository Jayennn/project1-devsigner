import { SectionServicePropsType } from '@/types/CustomPropsType.tsx'
import Typography from '@/components/Atoms/Typography.tsx'
import ServiceCard from '@/components/Molecules/ServiceCard.tsx'
import AnimatedText from '../Animation/AnimatedText'

const SectionService = ({
    title,
    subtitle,
    services,
}: SectionServicePropsType) => {
    return (
        <section className={'px-8 lg:px-8 py-12'}>
            <div className='container relative'>
                <div className={"bg-gradient-to-t bg-[#f3f3f3] absolute w-full h-full -z-10 blur-3xl"}/>
                <div className={"text-center lg:text-left"}>
                    <Typography
                        variant={'h5'}
                        as={"div"}
                        color={'blue'}
                        className={'mb-4 uppercase '}
                    >
                        <AnimatedText justify='center' word={title}/>
                    </Typography>
                    <Typography
                        variant={'h1'}
                        as={"div"}
                        color={'primary'}
                        className={
                            'line max-w-4xl text-3xl mx-auto font-[700] leading-snug lg:!leading-extraLoose'
                        }
                    >
                        <AnimatedText justify='center' word={subtitle}/>
                    </Typography>
                </div>


                <div className={'my-16 grid grid-cols-1 gap-12 lg:grid-cols-3'}>
                    {services.map((props) => <ServiceCard key={props.title} {...props}/> )}
                </div>
            </div>
        </section>
    )
}

export default SectionService
