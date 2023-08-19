

import Typography from '@/components/Atoms/Typography.tsx'
import { ServiceOfficeCardPropsType } from '@/types/CustomPropsType.tsx'
import {LearnMoreIcon} from "@/components/icons";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/Atoms/Card.tsx";

const ServiceOfficeCard = ({
    title,
    subtitle,
    imageUrl,
}: ServiceOfficeCardPropsType) => {
    return (
        <Card className=" gap-7 px-4 py-2 text-left !shadow-none">
            <CardHeader className={''}>
                <img src={imageUrl} alt="office"/>
            </CardHeader>
            <CardContent>
                <Typography as={"h4"} variant="h4" color="primary">
                    {title}
                </Typography>
                <Typography
                    variant="p"
                    color="secondary"
                    className={'mt-6'}
                >
                    {subtitle}
                </Typography>
            </CardContent>
            <CardFooter className="flex items-center gap-2">
                <Typography
                    variant={'p'}
                    color={'blue'}
                    className={'flex items-center gap-2 font-semibold'}
                >
                    Learn more
                    <LearnMoreIcon/>
                </Typography>
            </CardFooter>
        </Card>
    );
}

export default ServiceOfficeCard
