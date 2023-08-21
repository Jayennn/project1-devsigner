import Typography from "@/components/Atoms/Typography.tsx";
import {Input} from "@/components/Atoms/Input.tsx";
import AnimatedText from "../Animation/AnimatedText";

type SubscribePropType = {
    title: string
    subtitle: string;
}
const SectionSubscribe = ({title,subtitle}: SubscribePropType) =>  <section className="grid mt-28 place-content-center">
    <div className="container">
        <div className="text-left md:text-center">
            <Typography className="md:leading-tight" as={"div"} variant={"h1"} color={"primary"}>
                <AnimatedText justify="center" word={title}/>
            </Typography>
            <Typography className="max-w-3xl mx-auto mt-6 font-light md:leading-tight" as={"h6"} variant={"h6"} color={"secondary"}>
                {subtitle}
            </Typography>
        </div>
        <div className="grid max-w-sm gap-4 mx-auto mt-10">
            <Input placeholder="Enter your email" button={true}/>
            <Typography className="text-base italic text-center" as={"p"} variant={"p"} color={"secondary"}>
                No worries, we don’t do spam!
            </Typography>
        </div>
    </div>
</section>

export default SectionSubscribe;