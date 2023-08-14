import { SectionServicePropsType } from '@/types/CustomPropsType.tsx'
import { Typography } from '@/components/Atoms/Typography.tsx'
import ServiceCard from '@/components/Molecules/ServiceCard.tsx'

const SectionService = ({
    title,
    subtitle,
    services,
}: SectionServicePropsType) => {
    return (
        <section className={'container  py-12'}>
            <Typography variant={'h5'} color={'blue'} className={'mb-4'}>
                {title}
            </Typography>
            <Typography
                variant={'h1'}
                color={'primary'}
                className={'max-w-6xl'}
            >
                {subtitle}
            </Typography>
            <div className={'my-12 grid grid-cols-1 gap-12 lg:grid-cols-3'}>
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
