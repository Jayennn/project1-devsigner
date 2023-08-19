import { SectionServicePropsType } from '@/types/CustomPropsType.tsx'
import Typography from '@/components/Atoms/Typography.tsx'
import ServiceCard from '@/components/Molecules/ServiceCard.tsx'

const SectionService = ({
    title,
    subtitle,
    services,
}: SectionServicePropsType) => {
    return (
        <section className={'container py-12'}>
            <div className={"bg-gradient-to-t bg-[#f3f3f3] absolute w-full h-full -z-10 blur-3xl"}/>
            <Typography
                variant={'h5'}
                as={"h5"}
                color={'blue'}
                className={'mb-4 uppercase'}
            >
                {title}
            </Typography>
            <Typography
                variant={'h1'}
                as={"h1"}
                color={'primary'}
                className={
                    'line max-w-4xl !text-[40px] font-[700] !leading-extraLoose'
                }
            >
                {subtitle}
            </Typography>
            <div className={'my-16 grid grid-cols-1 gap-12 lg:grid-cols-3'}>
                {services.map((props) => <ServiceCard {...props}/> )}
            </div>
        </section>
    )
}

export default SectionService
