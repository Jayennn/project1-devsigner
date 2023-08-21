import Typography from "@/components/Atoms/Typography.tsx";
import Counter from "../Animation/Counter";

const ItemDataAbout = ({title, subtitle, description}: { title: number, subtitle: string, description: string }) => <div>
    <Typography variant={"h1"} as={"div"} color={"blue"} className={"flex items-center gap-3 font-extrabold"}>
        <Counter from={0} to={title} />
        <span>+</span>
    </Typography>
    <Typography variant={"h4"} as={"h4"} className={"my-4"}>
        {subtitle}
    </Typography>
    <Typography variant={"p"}>
        {description}
    </Typography>
</div>

export default ItemDataAbout