import { Card, CardContent, CardFooter, CardHeader } from '@/components/Atoms/Card.tsx'
import { LearnMoreIcon } from '../icons/LearnMoreIcon.tsx'
import <Typography></Typography> from '@/components/Atoms/Typography.tsx'
import { ServiceCardPropsType } from '@/types/CustomPropsType.tsx'

const ServiceCard = ({
    title,
    subtitle,
    icon,
    isBordered,
}: ServiceCardPropsType) => {
    return (
        <Card className={`${isBordered && 'border-[1px] border-themeBlue'}`}>
            <CardHeader>{icon}</CardHeader>
            <CardContent>
                <Typography variant={'h6'} className={'mb-4'}>
                    {title}
                </Typography>
                <Typography
                    variant={'h6'}
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
                    className={'flex gap-2 font-semibold'}
                >
                    Learn More
                    <LearnMoreIcon />
                </Typography>
            </CardFooter>
        </Card>
    )
}

export default ServiceCard
