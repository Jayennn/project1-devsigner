import { Card, CardContent, CardFooter, CardHeader } from '../Atoms/Card.tsx'
import { LearnMore } from '../icons/LearnMore.tsx'

import { Typography } from '@/components/Atoms/Typography.tsx'
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
                    <LearnMore />
                </Typography>
            </CardFooter>
        </Card>
    )
}

export default ServiceCard
