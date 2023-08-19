import { Card, CardContent, CardFooter, CardHeader } from '@/components/Atoms/Card.tsx'
import { LearnMoreIcon } from '../icons/LearnMoreIcon.tsx'
import Typography from '@/components/Atoms/Typography.tsx'
import { ServiceCardPropsType } from '@/types/CustomPropsType.tsx'

const ServiceCard = ({
    title,
    subtitle,
    icon,
    isBordered,
}: ServiceCardPropsType) => {
    return (
        <Card className={`${isBordered && 'border-[1px] border-themeBlue'} !shadow-none`}>
            <CardHeader>{icon}</CardHeader>
            <CardContent>
                <Typography
                    variant={'h4'}
                    as={"h4"}
                    className={'mb-4'}
                >
                    {title}
                </Typography>
                <Typography
                    variant={'h5'}
                    as={"h5"}
                    color={'secondary'}
                    className={'max-w-md font-light'}
                >
                    {subtitle}
                </Typography>
            </CardContent>
            <CardFooter>
                <Typography
                    variant={'p'}
                    color={'blue'}
                    className={'flex items-center gap-2 !text-lg font-semibold'}
                >
                    Learn More
                    <LearnMoreIcon />
                </Typography>
            </CardFooter>
        </Card>
    )
}

export default ServiceCard
