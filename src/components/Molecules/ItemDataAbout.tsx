import Typography from "@/components/Atoms/Typography.tsx";

const ItemDataAbout = ({title, subtitle, description}: { title: string, subtitle: string, description: string }) => <div>
    <Typography variant={"h1"} color={"blue"} className={"font-extrabold"}>
        {title}
    </Typography>
    <Typography variant={"h4"} className={"my-4"}>
        {subtitle}
    </Typography>
    <Typography variant={"p"}>
        {description}
    </Typography>
</div>

export default ItemDataAbout