import { Card, CardContent, CardFooter, CardHeader } from '../Atoms/Card.tsx'
import { LearnMore } from '../icons/LearnMore.tsx'
import { Typography } from '@/components/Atoms/Typography.tsx'
import { ServiceOfficeCardPropsType } from '@/types/CustomPropsType.tsx'

const ServiceOfficeCard = ({
    title,
    subtitle,
    imageUrl,
}: ServiceOfficeCardPropsType) => {
    return (
        <Card className=" gap-7 text-left">
            <CardHeader>
                <img src={imageUrl} alt="office" />
            </CardHeader>
            <CardContent>
                <Typography variant="h6" color="primary">
                    {title}
                </Typography>
                <Typography
                    variant="p"
                    color="secondary"
                    className={'mt-6 !text-lg'}
                >
                    {subtitle}
                </Typography>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
                <Typography
                    variant={'p'}
                    color={'blue'}
                    className={'flex items-center gap-2 !text-lg font-semibold'}
                >
                    Learn more
                    <LearnMore />
                </Typography>
            </CardFooter>
        </Card>
    )
}

export default ServiceOfficeCard