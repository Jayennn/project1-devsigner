import { SectionServiceOfficePropType } from '@/types/CustomPropsType.tsx'
import Typography from '@/components/Atoms/Typography.tsx'
import ServiceOfficeCard from '@/components/Molecules/ServiceOfficeCard.tsx'

const SectionOfficeService = ({
    title,
    subtitle,
    description,
    services,
}: SectionServiceOfficePropType) => {
    return (
        <section className={'container  py-12 text-center'}>
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
                    'mx-auto my-6 max-w-[690px] !text-[43px] !font-[700]  !leading-extraLoose'
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
            <div className={'my-16 relative grid grid-cols-1 gap-12  lg:grid-cols-3 '}>
                <div className="w-full h-full absolute -z-10 blur-3xl bg-[#F0F0F0]" />
                {services.map(({ imageUrl, title, subtitle },index) => (
                    <ServiceOfficeCard
                        key={index}
                        imageUrl={imageUrl}
                        title={title}
                        subtitle={subtitle}
                    />
                ))}
            </div>
        </section>
    )
}

export default SectionOfficeService
