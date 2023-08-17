import { SectionServicePropsType } from '@/types/CustomPropsType.tsx'
import { Typography } from '@/components/Atoms/Typography.tsx'
import ServiceCard from '@/components/Molecules/ServiceCard.tsx'

const SectionService = ({
    title,
    subtitle,
    services,
}: SectionServicePropsType) => {
    return (
        <section className={'container  lg:py-12'}>
            <div className={"text-center lg:text-left"}>
                <Typography
                    variant={'h5'}
                    color={'blue'}
                    className={'mb-4 uppercase'}
                >
                    {title}
                </Typography>
                <Typography
                    variant={'h1'}
                    color={'primary'}
                    className={
                        'line max-w-4xl text-3xl lg:!text-[40px] font-extrabold leading-relaxed lg:!leading-extraLoose'
                    }
                >
                    {subtitle}
                </Typography>
            </div>


            <div className={'my-16 grid grid-cols-1 gap-12 lg:grid-cols-3'}>
                {services.map(({ icon, title, subtitle, isBordered }) => (
                    <ServiceCard
                        icon={icon}
                        title={title}
                        subtitle={subtitle}
                        isBordered={isBordered}
                    />
                ))}
            </div>
        </section>
    )
}

export default SectionService
