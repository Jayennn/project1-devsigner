import Typography from "@/components/Atoms/Typography.tsx";
import {Input} from "@/components/Atoms/Input.tsx";

type SubscribePropType = {
    title: string
    subtitle: string;
}
const SectionSubscribe = ({title,subtitle}: SubscribePropType) =>  <section className="mt-28 grid place-content-center">
    <div className="container">
        <div className="text-left md:text-center">
            <Typography className="md:leading-tight" as={"h1"} variant={"h1"} color={"primary"}>
                {title}
            </Typography>
            <Typography className="max-w-3xl mx-auto mt-6 font-light md:leading-tight" as={"h6"} variant={"h6"} color={"secondary"}>
                {subtitle}
            </Typography>
        </div>
        <div className="mt-10 max-w-sm mx-auto grid gap-4">
            <Input placeholder="Enter your email" button={true}/>
            <Typography className="text-center italic text-base" as={"p"} variant={"p"} color={"secondary"}>
                No worries, we don’t do spam!
            </Typography>
        </div>
    </div>
</section>

export default SectionSubscribe;