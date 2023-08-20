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
            <Typography
                as={'h1'}
                variant={'h1'}
                color={'blue'}
                className={'text-base uppercase md:text-lg mb-4'}
            >
                {title}
            </Typography>
            <Typography
                className='max-w-sm text-lg text-center'
                as={"h1"}
                variant={'h1'}
                color={'primary'}
            >
                {subtitle}
            </Typography>
            <div className={'my-16 relative grid grid-cols-1 gap-12 lg:grid-cols-3'}>
            <div className={"bg-gradient-to-t bg-[#f3f3f3] absolute w-full h-full -z-10 blur-3xl"}/>
                {services.map(({ icon, title, subtitle, isBordered }) => (
                    <ServiceCard
                        key={title}
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
