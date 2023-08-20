import Typography from "@/components/Atoms/Typography.tsx";
import {ItemTeamPropsType} from "@/types/CustomPropsType.tsx";
import {cn} from "@/lib/utils.ts";

const ItemTeamAbout = ({name, position, imageUrl,isLast}: ItemTeamPropsType) =>
    <div
        className={`${cn(isLast && "col-span-2 lg:col-span-1 justify-center","text-center")}  `}
    >

        <img src={imageUrl}  alt={"Team Image"} className={"rounded-xl mx-auto max-w-[170px] md:max-w-fit"}/>
        <Typography as={"h5"} variant={"h5"} className={"my-4"}>
            {name}
        </Typography>
        <Typography variant={"p"}>
            {position}
        </Typography>
    </div>

export default ItemTeamAbout