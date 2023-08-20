import {SectionServiceOfficePropType} from '@/types/CustomPropsType.tsx'
import Typography from '@/components/Atoms/Typography.tsx'
import ServiceOfficeCard from '@/components/Molecules/ServiceOfficeCard.tsx'

const SectionOfficeService = ({
                                  title,
                                  subtitle,
                                  description,
                                  services,
                              }: SectionServiceOfficePropType) => {
    return (
        <section className={'py-12 text-center relative'}>
            <div className={"bg-gradient-to-t bg-[#f3f3f3] absolute w-full h-full -z-10 blur-3xl"}/>
            <div className={"container"}>
                <Typography
                    variant={'h4'}
                    as={"h4"}
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
                        'mx-auto my-6 max-w-[690px]'
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
                <div className={'my-16 grid grid-cols-1 gap-12  lg:grid-cols-3 '}>
                    {services.map((props, index) => <ServiceOfficeCard key={index} {...props} />)}
                </div>
            </div>
        </section>
    )
}

export default SectionOfficeService
